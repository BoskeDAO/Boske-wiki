---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Portals'
description: 'Tất tần tật về Portal trong Aavegotchi'
contributors:
  - "appellants"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Portal Trong Game Aavegotchi</p>
</div>

Làm thế nào để triệu hồi Aavegotchi và đưa nó từ Nether realm đến với màn hình của bạn? Tất nhien là thông qua Portal!

Hãy nhìn thấu vào những chiều sâu tím thẩm và tìm xem sinh vật gì đang ẩn nấp bên dưới - mấy fen sẽ tìm thấy một người bạn cho mình. Hoặc còn đặc biệt hơn nữa là có đến tận 10 người bạn.

Vậy nên hãy mang lên mình chiếc áo choàng ma thuật - đã đến lúc để tìm hiểu về Portal và nghi lễ triệu hồi các Aavegotchi. 

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#buying-a-portal>Mua Portal</a></li>
<li><a href=#opening-your-portal>Mở Portal</a></li>
<li><a href=#claiming-an-aavegotchi>Nhận Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Chuyển Aavegotchi Sang Địa Chỉ Khác</a></li>
</ol>

</div>

## Mua Portal

Trước khi nuôi nấng những bé ma pixel, bạn sẽ phải triệu hồi chúng thông qua một cách cổng. Bạn có thể mua được nó thông qua [Dapp chính thức của Aavegtochi](https://aavegotchi.com/buy-portal), hoặc thị trường bên ngoài ví dụ như [OpenSea](https://opensea.io/).

Nếu bạn mua từ Dapp của Aavegotchi, mỗi cánh cổng sẽ có giá gần 100 GHST. Những thiết bị này sẽ được tra mắt trong sự kiện 'Haunts' (nhiều phiên bản). Sự kiện haunt đầu tiên sẽ chào bán chỉ 10.000 Portals. Sau đó, [AavegotchiDAO](/dao) sẽ tiếp tục vote để ra những quyết định liên quan đến những sự kiện haunt riêng biệt. Ví dụ, giá cánh cổng và số lượng có thể thay đổi trong tương lai, là kết quả của các quyết định và biểu quyết từ DAO.


## Mở Portal

Ngon lành! Bạn sắp có thể mua cổng rồi nhé. Đây là lúc ~ Portal Summoning Ritual ~ (Nghi Lễ Triệu Hồi Qua Cánh Cổng) được triển khai. Cơ chế này giúp bạn có thể triệu hồi Aavegotchi cho mình.

Sau khi mua portal, bước kế tiếp là mở nó ra. Opening the portal occurs on [Polygon](/glossary#polygon) where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf) is called behind-the-scenes. Sau khi hoàn thành, portal sẽ được chỉ định một số ngẫu nhiên để đảm bảo các chỉ số của Aavegotchi được ngẫu nhiên một cách công khai.

Đây là một biểu đồ tóm tắt quá trình:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Quá trình mở Portal trong Aavegotchi" />

Mỗi cánh cổng có chứa 10 Aavegotchi khác nhau để bạn chọn, kêu gọi nó từ Nether realm. Bạn sẽ cần chọn 1 trong số 10 bé ma để triệu hồi. Số còn lại, tiếc thay, sẽ tan biến mãi mãi.

Những Aavegotchi này đều có những đặc điểm khác nhau được sinh ra một cách ngẫu nhiên. Khi chuyển đổi giữa các option, bạn có thể xem những đặc điểm này và [Base Rarity Score](/rarity-farming#base-rarity-score) thuộc về Aavegotchi của bạn. Đây là rarity score mà Aavegotchi có được lúc ban đầu, dựa trên những đặc điểm khởi đầu mà có sỡ hữu khi được triệu hồi. Rarity score này sau đó có thể được điều chỉnh thông qua một loạt các hoạt động, ví dụ như trang bị wearables cho Aavegotchi của bạn.

Bạn có thể xem nhóm đặc điểm và tỷ lệ hiếm trong bản ở đây:

table_PortalTraitTable


Bạn có thể xem thêm và cơ chế này tại [đây](/rarity-farming).


## Nhận Aavegotchi

Để nhận Aavegotchi từ portal, bạn cần phải stake một lượng Spirit Force được yêu cầu ([ các aToken](/atokens)) vào trong Portal. AToken có thể được mua trực tiếp thông qua [Aave](https://aave.com/) hoặc những DEX như Uniswap.

Cùng với giá trị tiền tệ như được định hình bởi độ hiếm và lực mua của thị trường, mỗi Aavegotchi cũng sẽ có một giá trị nội tại. Atoken mà bạn stake sẽ cung cấp giá trị nội tại này.

**Để có thêm nhiều thông tin hơn về aToken, hãy xem qua [aTokens](/atokens).**

Nói chung là, lượng Spirit Force (tài sản ký gửi) thấp nhất phụ thuộc vào Base Rarity Score của Aavegotchi mà bạn muốn triệu hồi. Điểm càng cao, tiền ký gửi phải càng nhiều.

Lượng tiền ký gửi thấp nhất được yêu cầu là 10 DAI, trong khi lớn nhất là 1000 DAI.

Công thức sau dùng để suy ra lượng Spirit Force (collateral) cần có như sau:

```
if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
```

Ví dụ, nếu Base Rarity Score thấp hơn, 300 thì bạn cần phải stake một lượng token có giá trị ít nhất 10 DAI để triệu hồi Gotchi.

Bạn có thể tăng hoặc giảm Spirit Force (lượng aToken được stake) của Aavegotchi thông qua giao diện ngừi dùng của Dapp Aavegotchi.

Để nhận được Gotchi, bạn cần phải thực hiện 2 giao dịch. Đầu tiên, bạn cần phải cho phép hợp đồng thông minh dùng aToken trong ví bạn. Giao dịch sau đó sẽ cho phép bạn nhận được Aavegotchi.


## Chuyển Aavegotchi Sang Địa Chỉ Khác

Chuyển Aavegotchi cho một người chủ mới (khi bạn trao đổi nó) cũng có nghĩa là bạn phải chuyển luôn số tiền ký gửi mà bạn stake cho nó, cũng như bất kỳ món trang bị nào có trong túi đồ của Aavegotchi. Điều này xảy ra khi bạn trade Aavegotchi trên một thị trường trực tuyến ví dụ như OpenSea.

Nếu bạn muốn nhận lại số tài sản ký gửi được stake trong Aavegotchi, thì có hai cách:

1. **Giảm lượng tài sản ký gửi** trong Aavegotchi (nhưng không được dưới mức stake tối thiểu).

2. **Burn Aavegotchi**, trả đĩa bay để Aavegotchi bay về Nether Realm và trả lại hết tài sản ký gửi.

**Trước khi bán Aavegotchi trên một thị trường thứ cấp như OpenSea, hãy "lock" Aavegotchi trong trong giao diện người dùng của Dapp, để tất cả những trang bị của Aavegotchi đều được chuyển khoản theo.**




