import { useRouter } from "next/dist/client/router";
import React from 'react'
import matter from 'gray-matter'
import { Row, Col, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout";
import NextReusableHead from "../../components/NextComponents/NextReusableHead";
import Sidebar from "../../components/Sidebar";
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import htmlParser from 'react-markdown/plugins/html-parser'
import Link from "next/link";
import { useEffect, useState } from "react";
import gfm from 'remark-gfm'

interface Commit {
    date: string
    name: string

}

const Page = (props) => {

    const router = useRouter()

    const [latestCommit, setLatestCommit] = useState<Commit>(undefined)

    const CodeBlock = require('../../components/CodeBlock').default

    const markdownBody = props.content
    const frontmatter = props.data


    const flatten = (text: string, child) => {
        return typeof child === 'string'
            ? text + child
            : React.Children.toArray(child.props.children).reduce(flatten, text);
    };

    /**
     * HeadingRenderer is a custom renderer
     * It parses the heading and attaches an id to it to be used as an anchor
     */
    const HeadingRenderer = props => {
        const children = React.Children.toArray(props.children);
        const text = children.reduce(flatten, '');
        const slug = text.toLowerCase().replace(/\W/g, '-');
        return React.createElement('h' + props.level, { id: slug }, props.children);
    };

    const renderers = {
        //This custom renderer changes how images are rendered
        //we use it to constrain the max width of an image to its container

        link: ({ children, href }) => {
            return <Link href={href}><a target="_blank">{children}</a></Link>
        },
        code: CodeBlock,
        heading: HeadingRenderer
    };

    const parseHtml = htmlParser({
        isValidNode: (node) => node.type !== 'script',
        processingInstructions: [
            /* ... */
        ]
    })


    useEffect(() => {

        getLastCommits()

    }, [router.query.pageID])

    async function getLastCommits() {
        const url = `https://api.github.com/repos/aavegotchi/aavegotchi-wiki/commits?path=posts/${router.query.lang}/${router.query.pageID}.md&page=1&per_page=1`

        const commits = await fetch(url)
        const response = await commits.json()

        console.log('response:', response)

        if (response.length > 0) {
            setLatestCommit(response[0].commit.author)
        }

    }




    return (
        <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>

            <NextReusableHead
                title="Aavegotchi Wiki"
                description="The Official Wiki of Aavegotchi"
                siteName="Aavegotchi Wiki"
                url="https://wiki.aavegotchi.com"
                faviconPath="/favicon.ico"
            />




            <Row style={{ padding: 0, margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }} xl={2} lg={2} md={2} sm={12} xs={12}>
                    <Sidebar />
                </Col>

                <Col>

                    <div className="blogBody">
                        <h1>{frontmatter.title}</h1>


                        <div className="latestCommit">
                            Last updated on {latestCommit && latestCommit.date} by {latestCommit && latestCommit.name}
                        </div>


                        <hr />
                        <ReactMarkdownWithHtml
                            plugins={[gfm]}
                            allowDangerousHtml={true}
                            astPlugins={[parseHtml]}
                            renderers={renderers}
                            children={markdownBody} />
                    </div>

                </Col>
            </Row>


        </Layout>
    );
};

export default Page;

Page.getInitialProps = async function (ctx) {
    const { lang, pageID } = ctx.query


    //First check if this page exists in the language 
    try {
        const content = await import(`../../posts/${lang}/${pageID}.md`)
        //@ts-ignore
        const config = await import(`../../data/config.json`)
        const data = matter(content.default);
        return {
            siteTitle: config.title,
            ...data
        }
    } catch (error) {
        //Then check if this page exists in English
        try {
            //@ts-ignore
            const content = await import(`../../posts/en/${pageID}.md`)
            //@ts-ignore
            const config = await import(`../../data/config.json`)
            const data = matter(content.default);
            return {
                siteTitle: config.title,
                ...data
            }
        } catch (error) {
            //@ts-ignore
            const content = await import(`../../posts/en/error.md`)
            //@ts-ignore
            const config = await import(`../../data/config.json`)
            const data = matter(content.default);
            return {
                siteTitle: config.title,
                ...data
            }
        }


    }

}
