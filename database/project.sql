/*
Navicat MySQL Data Transfer

Source Server         : Admin
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2014-05-24 13:08:30
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `articles`
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `meta_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_keyword` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL,
  `type` smallint(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO articles VALUES ('23', 'Giới thiệu Website', 'gioi-thieu-website', '<p>Giới thiệu website</p>', '<p><strong>Lorem Ipsum</strong> chỉ đơn giản l&agrave; một đoạn văn bản giả, được d&ugrave;ng v&agrave;o việc tr&igrave;nh b&agrave;y v&agrave; d&agrave;n trang phục vụ cho in ấn. Lorem Ipsum đ&atilde; được sử dụng như một văn bản chuẩn cho ng&agrave;nh c&ocirc;ng nghiệp in ấn từ những năm 1500, khi một họa sĩ v&ocirc; danh gh&eacute;p nhiều đoạn văn bản với nhau để tạo th&agrave;nh một bản mẫu văn bản. Đoạn văn bản n&agrave;y kh&ocirc;ng những đ&atilde; tồn tại năm thế kỉ, m&agrave; khi được &aacute;p dụng v&agrave;o tin học văn ph&ograve;ng, nội dung của n&oacute; vẫn kh&ocirc;ng hề bị thay đổi. N&oacute; đ&atilde; được phổ biến trong những năm 1960 nhờ việc b&aacute;n những bản giấy Letraset in những đoạn Lorem Ipsum, v&agrave; gần đ&acirc;y hơn, được sử dụng trong c&aacute;c ứng dụng d&agrave;n trang, như Aldus PageMaker.</p>', 'Giới thiệu', '', '', 'public/images/articles/5347e64f2cd97.png', '1', '3', '2014-04-11 19:55:43', '2014-04-11 19:55:43');
INSERT INTO articles VALUES ('24', 'Tuyệt chiêu kết hợp chuẩn chỉnh màu sắc của giày với trang phục', 'tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc', 'Là một cô nàng công sở am hiểu về thời trang, chắc chắn bạn sẽ khá tường tận các quy tắc chọn giày hợp với trang phục cũng như vóc dáng của mình.', '<p>L&agrave; một c&ocirc; n&agrave;ng c&ocirc;ng sở am hiểu về&nbsp;<a href=\"http://edaily.vn/thoi-trang-d21/\">thời trang</a>, chắc chắn bạn sẽ kh&aacute; tường tận c&aacute;c quy tắc chọn gi&agrave;y hợp với trang phục cũng như v&oacute;c d&aacute;ng của m&igrave;nh. Đ&acirc;y kh&ocirc;ng những l&agrave; phụ kiện bắt buộc phải c&oacute; m&agrave; n&oacute; c&ograve;n c&oacute; vai tr&ograve; nhất định trong việc thể hiện gout thẩm mỹ của ph&aacute;i đẹp. V&agrave; d&ugrave; cho bạn đ&atilde; kh&aacute; am hiểu về việc kết hợp m&agrave;u sắc gi&agrave;y với quần &aacute;o cũng như lu&ocirc;n cập nhật những xu hướng gi&agrave;y mới nhất tr&ecirc;n l&agrave;ng thời trang th&igrave; cũng cần tham khảo b&agrave;i viết dưới đ&acirc;y. Chắc chắn bạn sẽ bổ sung được kh&aacute; nhiều kiến thức cho việc chọn gi&agrave;y của m&igrave;nh.&nbsp;</p>\r\n<div>1. Gi&agrave;y đỏ</div>\r\n<div>M&agrave;u đỏ l&agrave; sự lựa chọn số một khi bạn muốn tạo điểm nhấn đầy ấn tượng cho trang phục của m&igrave;nh. N&oacute;i c&aacute;ch kh&aacute;c một đ&ocirc;i gi&agrave;y đỏ sẽ thổi bừng sức sống cho bộ trang phục bạn mặc v&agrave; khiến bạn th&ecirc;m tươi tắn, sống động. Tuy nhi&ecirc;n, điểm yếu của một đ&ocirc;i gi&agrave;y đỏ l&agrave; bạn kh&ocirc;ng được kết hợp với qu&aacute; nhiều m&agrave;u sắc sặc sỡ kh&aacute;c hoặc chọn nguy&ecirc;n một bộ trang phục m&agrave;u đỏ nếu kh&ocirc;ng muốn l&agrave;m người kh&aacute;c nhức mắt khi nh&igrave;n thấy bạn. T&ocirc;ng m&agrave;u l&yacute; tưởng để đi c&ugrave;ng gi&agrave;y đỏ n&ecirc;n l&agrave; m&agrave;u hồng nhẹ, m&agrave;u cam, trắng-đen, xanh t&iacute;m than hoặc những gam m&agrave;u trung t&iacute;nh.&nbsp;</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (0)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (0)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (1)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (1)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (2)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (2)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (3)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (3)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (4)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (4)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (5)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (5)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />2. Gi&agrave;y xanh l&aacute;</div>\r\n<center>\r\n<div>&nbsp;</div>\r\n<div id=\"ebzNative\">&nbsp;</div>\r\n</center>\r\n<div>M&agrave;u xanh l&aacute; sẽ mang lại cho bạn một diện mạo rất trẻ trung năng động v&agrave; đương nhi&ecirc;n kh&ocirc;ng k&eacute;m nổi bật như một đ&ocirc;i gi&agrave;y m&agrave;u đỏ. Với một đ&ocirc;i gi&agrave;y m&agrave;u xanh l&aacute;, bạn c&oacute; thể kết hợp c&ugrave;ng quần &aacute;o m&agrave;u n&acirc;u, đen, xanh dương, m&agrave;u trung t&iacute;nh, m&agrave;u v&agrave;ng. N&ecirc;n nhớ đừng kết hợp với m&agrave;u đỏ hoặc m&agrave;u cam, bởi set đồ như vậy sẽ khiến bạn tr&ocirc;ng giống một c&acirc;y th&ocirc;ng noel di động.&nbsp;</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (6)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (6)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (7)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (7)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (8)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (8)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (9)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (9)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (10)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (10)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />3. Gi&agrave;y xanh dương</div>\r\n<div>Một đ&ocirc;i gi&agrave;y m&agrave;u xanh dương lại mang đến cho bạn một vẻ đẹp kh&aacute;c: chuy&ecirc;n nghiệp v&agrave; đẳng cấp hơn, nhất l&agrave; khi bạn kết hợp n&oacute; với skinny jeans c&ugrave;ng tone gi&agrave;y hoặc nhạt hơn một ch&uacute;t. B&ecirc;n cạnh đ&oacute;, một đ&ocirc;i gi&agrave;y m&agrave;u xanh dương cũng rất th&iacute;ch hợp để kết hợp với trang phục m&agrave;u v&agrave;ng hay c&aacute;c gam m&agrave;u trung t&iacute;nh như n&acirc;u, trắng.</div>\r\n<div><br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (11)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (11)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (12)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (12)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (13)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (13)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (14)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (14)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />4. Gi&agrave;y v&agrave;ng</div>\r\n<div>Mặc d&ugrave; m&agrave;u v&agrave;ng hay t&iacute;m đều l&agrave; những t&ocirc;ng m&agrave;u rất nổi bật v&agrave; ho&agrave;n to&agrave;n c&oacute; thể đứng ri&ecirc;ng lẻ để tạo điểm nhấn cho to&agrave;n bộ trang phục, nhưng khi kết hợp với nhau th&igrave; ch&uacute;ng lại tạo ra một vẻ đẹp kh&aacute; ấn tượng v&agrave; cũng rất bắt mắt. Chỉ cần bạn c&acirc;n đối được m&agrave;u sắc của 2 t&ocirc;ng m&agrave;u n&agrave;y tr&ecirc;n một set đồ, ch&uacute;ng sẽ mang lại cho bạn vẻ ngo&agrave;i cực k&igrave; thời thượng. Với gi&agrave;y m&agrave;u v&agrave;ng, bạn n&ecirc;n kết hợp c&ugrave;ng quần &aacute;o m&agrave;u xanh dương, xanh l&aacute; hoặc trắng-đen.&nbsp;</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (15)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (15)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (16)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (16)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (17)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (17)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (18)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (18)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />5. Gi&agrave;y m&agrave;u cam</div>\r\n<div>Nếu bạn đang sở hữu một đ&ocirc;i gi&agrave;y m&agrave;u cam, h&atilde;y nhớ đừng bao giờ mặc n&oacute; chung với quần &aacute;o m&agrave;u xanh, t&iacute;m. Điều đ&oacute; cũng sẽ giống như việc bạn trang điểm qu&aacute; nhiều m&agrave;u sắc l&ecirc;n mặt m&igrave;nh). Gi&agrave;y m&agrave;u da cam sẽ thực sự bật l&ecirc;n được vẻ đẹp của n&oacute; khi đi c&ugrave;ng c&aacute;c gam m&agrave;u trung t&iacute;nh, m&agrave;u be, m&agrave;u n&acirc;u đất, m&agrave;u đỏ, v&agrave;ng, trắng v&agrave; xanh dương. Nếu bạn đi một đ&ocirc;i gi&agrave;y cam nhạt m&agrave;u, bạn c&oacute; thể kết hợp c&ugrave;ng một số phụ kiện m&agrave;u n&acirc;u để tạo n&ecirc;n vẻ ngo&agrave;i l&ocirc;i cuốn, hấp dẫn.&nbsp;</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (19)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (19)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (20)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (20)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (21)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (21)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (22)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (22)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />6. Gi&agrave;y &aacute;nh kim</div>\r\n<div>Vẻ đẹp của những đ&ocirc;i gi&agrave;y &aacute;nh kim nằm ở chỗ n&oacute; c&oacute; thể khiến to&agrave;n bộ trang phục của bạn tỏa s&aacute;ng lấp l&aacute;nh chỉ với sự &oacute;ng &aacute;nh của n&oacute;. V&agrave; đương nhi&ecirc;n, để l&agrave;m bật l&ecirc;n sự &oacute;ng &aacute;nh n&agrave;y th&igrave; bạn đừng kết hợp với quần &aacute;o c&oacute; t&ocirc;ng m&agrave;u qu&aacute; nhiều m&agrave;u sắc l&ograve;e loẹt. B&ecirc;n cạnh đ&oacute; cũng cần lưu &yacute; đến những phụ kiện kh&aacute;c như t&uacute;i x&aacute;ch, đừng n&ecirc;n chọn t&uacute;i x&aacute;ch &oacute;ng &aacute;nh v&igrave; n&oacute; sẽ l&agrave;m người kh&aacute;c l&oacute;a mắt khi tr&ecirc;n người bạn c&oacute; qu&aacute; nhiều phụ kiện &aacute;nh kim như vậy. \"Một nửa\" ăn &yacute; của những đ&ocirc;i gi&agrave;y &aacute;nh bạc l&agrave; m&agrave;u trắng, đỏ, t&iacute;m, m&agrave;u trung t&iacute;nh, m&agrave;u ch&agrave;m, m&agrave;u đen. M&agrave;u đen, đỏ, trắng, ngọc lục bảo, xanh dương, đỏ t&iacute;a th&igrave; đ&iacute;ch th&igrave; l&agrave; để d&agrave;nh cho việc \"gh&eacute;p đ&ocirc;i\" với gi&agrave;y &aacute;nh v&agrave;ng.&nbsp;</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (23)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (23)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>\r\n<div>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (24)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (24)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (25)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (25)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (26)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (26)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (27)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (27)\" width=\"undefined\" height=\"undefined\" /></div>\r\n<br />7. Gi&agrave;y m&agrave;u t&iacute;m&nbsp;</div>\r\n<div>Nếu như bạn đ&atilde; cảm thấy ch&aacute;n ng&aacute;n khi kết hợp m&agrave;u t&iacute;m với c&aacute;c t&ocirc;ng m&agrave;u an to&agrave;n nhất như gam m&agrave;u trung t&iacute;nh th&igrave; h&atilde;y thử kết hợp với m&agrave;u v&agrave;ng rực rỡ. Một đ&ocirc;i gi&agrave;y m&agrave;u t&iacute;m đi c&ugrave;ng chiếc v&aacute;y lụa mềm mại tone v&agrave;ng rực rỡ sẽ tạo n&ecirc;n trang phục v&ocirc; c&ugrave;ng mới mẻ m&agrave; bạn chưa bao giờ biết đến. Sự quyến rũ của gam m&agrave;u t&iacute;m đi c&ugrave;ng sự quyến rũ nổi bật của v&agrave;ng sẽ tạo ra một vẻ đẹp cực kỳ l&ocirc;i cuốn cho một c&ocirc; n&agrave;ng c&aacute; t&iacute;nh nhưng kh&ocirc;ng k&eacute;m nữ t&iacute;nh như bạn.</div>\r\n<div><br />\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (28)\" src=\"http://media.edaily.vn/resize_500/files/thoi-trang/20140331/tuyet-chieu-ket-hop-chuan-chinh-mau-sac-cua-giay-voi-trang-phuc-0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28.jpg\" alt=\"Tuyệt chi&ecirc;u kết hợp chuẩn chỉnh m&agrave;u sắc của gi&agrave;y với trang phục (28)\" width=\"undefined\" height=\"undefined\" /></div>\r\n</div>', '', '', '', 'public/images/articles/537d3496e2fca.jpg', '1', '1', '2014-05-22 06:20:26', '2014-05-22 06:19:50');
INSERT INTO articles VALUES ('25', 'Xu hướng thời trang Xuân - hè 2014', 'xu-huong-thoi-trang-xuan-he-2014', 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.', '<p>Lorem Ipsum chỉ đơn giản l&agrave; một đoạn văn bản giả, được d&ugrave;ng v&agrave;o việc tr&igrave;nh b&agrave;y v&agrave; d&agrave;n trang phục vụ cho in ấn. Lorem Ipsum đ&atilde; được sử dụng như một văn bản chuẩn cho ng&agrave;nh c&ocirc;ng nghiệp in ấn từ những năm 1500.</p>', '', '', '', 'public/images/articles/5344c3242a416.jpg', '1', '1', '2014-04-09 10:48:52', '2014-04-09 10:48:52');
INSERT INTO articles VALUES ('26', 'Xu hướng thời trang Xuân - hè 2014', 'xu-huong-thoi-trang-xuan-he-2014', 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.', '<p>Lorem Ipsum chỉ đơn giản l&agrave; một đoạn văn bản giả, được d&ugrave;ng v&agrave;o việc tr&igrave;nh b&agrave;y v&agrave; d&agrave;n trang phục vụ cho in ấn. Lorem Ipsum đ&atilde; được sử dụng như một văn bản chuẩn cho ng&agrave;nh c&ocirc;ng nghiệp in ấn từ những năm 1500.</p>', '', '', '', 'public/images/articles/5344c2f83afd3.jpg', '1', '1', '2014-04-09 10:48:08', '2014-04-09 10:48:08');
INSERT INTO articles VALUES ('27', 'Xu hướng thời trang Xuân - hè 2014 ', 'xu-huong-thoi-trang-xuan-he-2014', 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.', '<p>Lorem Ipsum chỉ đơn giản l&agrave; một đoạn văn bản giả, được d&ugrave;ng v&agrave;o việc tr&igrave;nh b&agrave;y v&agrave; d&agrave;n trang phục vụ cho in ấn. Lorem Ipsum đ&atilde; được sử dụng như một văn bản chuẩn cho ng&agrave;nh c&ocirc;ng nghiệp in ấn từ những năm 1500.</p>', '', '', '', 'public/images/articles/5344c3489e2ce.jpg', '1', '1', '2014-04-09 10:49:28', '2014-04-09 10:49:28');
INSERT INTO articles VALUES ('28', ' Ngất ngây ngắm street style của 3 mỹ nhân showbiz Việt trong tuần', 'ngat-ngay-ngam-street-style-cua-3-my-nhan-showbiz-viet-trong-tuan', '<p>Ho&agrave;ng Th&ugrave;y, Đinh Hương, Tr&agrave; Ngọc Hằng l&agrave; những người đẹp c&oacute; street style ấn tượng v&agrave; thu h&uacute;t nhất</p>', '<p>Ho&agrave;ng Th&ugrave;y khoe vẻ đẹp tr&agrave;n đầy sức sống với set đồ bắt mắt<br />Ho&agrave;ng Th&ugrave;y đang được xem l&agrave; một trong những c&ocirc; n&agrave;ng mẫu Việt c&oacute; gu&nbsp;<a href=\"http://edaily.vn/thoi-trang-d21/\">thời trang</a>&nbsp;phong c&aacute;ch nhất hiện nay. Người đẹp 9X c&ograve;n khiến fan Việt ngưỡng mộ với những lựa chọn trang phục ng&agrave;y c&agrave;ng phong c&aacute;ch.</p>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (0)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_20.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (0)\" width=\"600\" height=\"900\" /></div>\r\n<p><br /><em>Đầu tuần, Ho&agrave;ng Th&ugrave;y ra phố với bộ c&aacute;nh mang m&agrave;u sắc color trẻ trung v&agrave; thời thượng</em></p>\r\n<p>&nbsp;</p>\r\n<center>\r\n<div>&nbsp;</div>\r\n<div id=\"ebzNative\">&nbsp;</div>\r\n</center>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (1)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_21.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (1)\" width=\"600\" height=\"912\" /></div>\r\n<p><br /><em>&Aacute;o len crop top kết hợp c&ugrave;ng ch&acirc;n v&aacute;y ngắn gi&uacute;p Ho&agrave;ng Th&ugrave;y khoe th&acirc;n h&igrave;nh chuẩn của một người mẫu</em></p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (2)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_19.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (2)\" width=\"600\" height=\"900\" /></div>\r\n<p><br /><em>Ho&agrave;ng Th&ugrave;y kh&ocirc;ng chỉ thu h&uacute;t ống k&iacute;nh bởi phong c&aacute;ch thời trang trẻ trung, cuốn h&uacute;t, m&agrave; c&ograve;n ở nụ cười tỏa s&aacute;ng tr&ecirc;n phố</em></p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (3)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_2.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (3)\" width=\"600\" height=\"889\" /></div>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (4)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (4)\" width=\"600\" height=\"900\" /></div>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (5)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_1.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (5)\" width=\"600\" height=\"400\" /></div>\r\n<p><br /><em>Sau 3 năm đăng quang ng&ocirc;i vị Qu&aacute;n qu&acirc;n Vietnam\'s Next Top Model, Ho&agrave;ng Th&ugrave;y ng&agrave;y c&agrave;ng chứng tỏ khả năng catwalk c&ugrave;ng gu thời trang ng&agrave;y c&agrave;ng ổn định</em></p>\r\n<p>&nbsp;</p>\r\n<p>Đinh Hương với street style ng&agrave;y c&agrave;ng chất<br />L&agrave; một trong số &iacute;t những mỹ nh&acirc;n Việt chăm chỉ chụp những bộ h&igrave;nh street style, update những xu hướng thời trang mới, Đinh Hương đang chứng tỏ sức h&uacute;t từ phong c&aacute;ch thời trang c&aacute; t&iacute;nh kh&ocirc;ng k&eacute;m phần gợi cảm của m&igrave;nh.</p>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (6)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_9.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (6)\" width=\"600\" height=\"900\" /></div>\r\n<p><br /><em>Đinh Hương biến h&oacute;a phong c&aacute;ch c&ugrave;ng blazer kết hợp c&ugrave;ng crop top cổ lọ đơn giản m&agrave; vẫn gợi cảm.&nbsp;Điểm nhấn quyết đị<span class=\"text_exposed_show\">nh cho phong c&aacute;ch street style ấn tượng n&agrave;y đ&oacute; ch&iacute;nh l&agrave; chiếc quần Baggy jean lưng cao, sự kết hợp gi&uacute;p x&oacute;a tan độ cứng nhắc của blazer v&agrave; đem đến sự th&uacute; vị cho set đồ n&agrave;y. Đi k&egrave;m đ&oacute; l&agrave; chiếc clutch bằng da c&aacute; t&iacute;nh mang lại hơi hướm menswear c&ugrave;ng chiếc v&ograve;ng cổ &aacute;nh bạc cực k&igrave; ton sur ton với đ&ocirc;i gi&agrave;y. Chỉ những chi tiết nhỏ nhưng lạ lẫm cũng đủ khiến bộ trang phục của Đinh Hương trở n&ecirc;n thời thượng v&agrave; đẳng cấp hơn!</span></em></p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (7)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_11.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (7)\" width=\"603\" height=\"960\" /></div>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (8)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_10.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (8)\" width=\"600\" height=\"943\" /></div>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (9)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_8.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (9)\" width=\"600\" height=\"855\" /></div>\r\n<p><br /><em>Bằng việc kết hợp những item cơ bản như chiếc &aacute;o sweater c&ugrave;ng ch&acirc;n v&aacute;y ngắn nhưng Đinh Hương đ&atilde; mang đến một c&aacute;i nh&igrave;n kh&aacute;c biệt khi vận dụng ch&uacute;ng với gam m&agrave;u trắng thuần khiết. Đ&acirc;y l&agrave; một trong những xu hướng rất được c&aacute;c bạn trẻ ưa chuộng. Kh&ocirc;ng qu&aacute; cầu k&igrave; nhưng vẫn to&aacute;t l&ecirc;n một c&aacute;i t&ocirc;i m&atilde;nh liệt trong c&aacute; t&iacute;nh. V&agrave; c&ocirc; n&agrave;ng kh&ocirc;ng qu&ecirc;n trang bị cho m&igrave;nh một điểm nhất đắt gi&aacute;, lạ lẫm đ&oacute; ch&iacute;nh l&agrave; chiếc k&iacute;nh mắt m&egrave;o trong suốt c&ugrave;ng đ&ocirc;i combat boot nạm đinh kh&aacute; chất</em></p>\r\n<p>&nbsp;</p>\r\n<p>Tr&agrave; Ngọc Hằng<br />Từng lọt v&agrave;o danh s&aacute;ch những \"mỹ nh&acirc;n rườm r&agrave;\" nhưng giờ đ&acirc;y với sự đầu tư nghi&ecirc;m t&uacute;c v&agrave;o mảng thời trang đường phố, Tr&agrave; Ngọc Hằng thể hiện sự cao tay trong việc mix đồ v&agrave; phụ kiện. C&ocirc; đặc biệt y&ecirc;u th&iacute;ch h&igrave;nh ảnh thanh lịch, ngọt ng&agrave;o nhưng đ&ocirc;i khi lại ph&aacute; c&aacute;ch với h&igrave;nh ảnh ph&oacute;ng kho&aacute;ng, năng động.&nbsp;Tươi trẻ, thanh lịch, ngọt ng&agrave;o l&agrave; những g&igrave; c&oacute; thể cảm nhận từ street style của Tr&agrave; Ngọc Hằng.&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (10)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_12.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (10)\" width=\"500\" height=\"741\" /></div>\r\n<p><br /><em>Tr&agrave; Ngọc Hằng chọn gam hồng l&agrave;m điểm nhấn khiến set đồ đơn giản của c&ocirc; n&agrave;ng tr&ocirc;ng nổi bật hơn bao giờ hết</em></p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (11)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_13.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (11)\" width=\"500\" height=\"385\" /></div>\r\n<p><br /><em>C&ocirc; n&agrave;ng kh&eacute;o l&eacute;o mix &aacute;o Valentino phối tiệp m&agrave;u với giầy hồng của Gucci, mắt k&iacute;nh Miu Miu ho&agrave;n to&agrave;n ăn nhập với chiếc t&uacute;i Michael Kors</em></p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (12)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_14.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (12)\" width=\"500\" height=\"728\" /></div>\r\n<p><br /><em>Ph&oacute;ng kho&aacute;ng v&agrave; trẻ trung với &aacute;o ph&ocirc;ng trắng giản dị mix c&ugrave;ng jeans r&aacute;ch c&aacute; t&iacute;nh. Tr&agrave; Ngọc Hằng chọn cho m&igrave;nh những phụ kiện gam m&agrave;u rực rỡ để l&agrave;m nổi bật set đồ của m&igrave;nh</em></p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (13)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_18.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (13)\" width=\"500\" height=\"722\" /></div>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (14)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_17.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (14)\" width=\"500\" height=\"750\" /></div>\r\n<p><br /><em>Tr&agrave; Ngọc Hằng thanh lịch v&agrave; tinh tế như một c&ocirc; n&agrave;ng c&ocirc;ng sở s&agrave;nh mốt với &aacute;o chấm bi của Burberry mix c&ugrave;ng ch&acirc;n v&aacute;y zara</em></p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (15)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_15.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (15)\" width=\"500\" height=\"714\" /></div>\r\n<p><br /><em>Style giấu quần gi&uacute;p c&ocirc; n&agrave;ng khoe ch&acirc;n thon đ&aacute;ng ghen tị</em></p>\r\n<div class=\"group1 cboxElement\"><img class=\"undefined\" title=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (16)\" src=\"http://media.edaily.vn/resize_500/files/fashion/133/efashion-48-street-style-my-nhan-viet-_16.jpg\" alt=\"Efashion(48): Ngất ng&acirc;y ngắm street style của 3 mỹ nh&acirc;n showbiz Việt trong tuần (16)\" width=\"500\" height=\"743\" /></div>\r\n<p><br /><em>Tr&agrave; Ngọc Hằng ng&agrave;y c&agrave;ng tinh tế hơn trong kỹ năng mix&amp;match, yếu tố quan trọng trong phong c&aacute;ch của người đẹp l&agrave; nguy&ecirc;n tắc ton-sur-ton trong việc kết hợp c&aacute;c item thời trang</em></p>\r\n<p>&nbsp;</p>', '', '', '', 'public/images/articles/537d357a5e5cd.jpg', '1', '1', '2014-05-22 06:23:38', '2014-05-22 06:23:38');

-- ----------------------------
-- Table structure for `assigned_roles`
-- ----------------------------
DROP TABLE IF EXISTS `assigned_roles`;
CREATE TABLE `assigned_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `assigned_roles_user_id_foreign` (`user_id`),
  KEY `assigned_roles_role_id_foreign` (`role_id`),
  CONSTRAINT `assigned_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `assigned_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of assigned_roles
-- ----------------------------
INSERT INTO assigned_roles VALUES ('1', '1', '1');
INSERT INTO assigned_roles VALUES ('7', '13', '2');
INSERT INTO assigned_roles VALUES ('10', '14', '4');
INSERT INTO assigned_roles VALUES ('11', '15', '5');

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL,
  `order` smallint(6) NOT NULL,
  `active` smallint(6) NOT NULL,
  `meta_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_keyword` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_slug_unique` (`slug`),
  KEY `categories_slug_index` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO categories VALUES ('1', 'Thời trang công sở', 'thoi-trang-cong-so', '0', '0', '1', '', '', '', '0000-00-00 00:00:00', '2014-03-19 23:43:59');
INSERT INTO categories VALUES ('2', 'Thời trang dạo phố', 'thoi-trang-dao-pho', '0', '1', '1', '', '', '', '0000-00-00 00:00:00', '2014-03-19 23:48:03');
INSERT INTO categories VALUES ('3', 'Phụ kiện', 'phu-kien', '0', '5', '1', '', '', '', '0000-00-00 00:00:00', '2014-03-28 16:18:15');
INSERT INTO categories VALUES ('4', 'Dành cho nam', 'thoi-trang-cong-so-danh-cho-nam', '1', '0', '1', '', '', '', '0000-00-00 00:00:00', '2014-03-19 20:46:06');
INSERT INTO categories VALUES ('5', 'Dành cho nam', 'thoi-trang-dao-pho-danh-cho-nam', '2', '0', '1', '', '', '', '0000-00-00 00:00:00', '2014-03-19 23:57:36');
INSERT INTO categories VALUES ('6', 'Dành cho nữ', 'thoi-trang-cong-so-danh-cho-nu', '1', '1', '1', '', '', '', '0000-00-00 00:00:00', '2014-03-28 22:13:22');
INSERT INTO categories VALUES ('7', 'Dành cho nữ', 'thoi-trang-da-hoi-danh-cho-nu', '9', '1', '1', '', '', '', '0000-00-00 00:00:00', '2014-04-11 15:17:31');
INSERT INTO categories VALUES ('8', 'Dành cho nữ', 'thoi-trang-dao-pho-danh-cho-nu', '2', '1', '1', '', '', '', '2014-03-03 04:45:01', '2014-03-19 23:03:39');
INSERT INTO categories VALUES ('9', 'Thời trang dạ hội', 'thoi-trang-da-hoi', '0', '2', '1', '', '', '', '2014-03-19 20:44:49', '2014-03-19 23:27:59');
INSERT INTO categories VALUES ('10', 'Đồ ngủ', 'do-ngu', '0', '3', '1', '', '', '', '2014-03-19 20:45:00', '2014-03-19 23:59:10');
INSERT INTO categories VALUES ('11', 'Dành cho nữ', 'do-ngu-danh-danh-cho-nu', '10', '1', '1', '', '', '', '2014-03-20 18:35:21', '2014-04-11 15:18:52');
INSERT INTO categories VALUES ('12', 'Dành cho nam', 'thoi-trang-da-hoi-danh-cho-nam', '9', '0', '1', '', '', '', '2014-04-11 15:16:46', '2014-04-11 15:17:46');
INSERT INTO categories VALUES ('13', 'Dành cho nam', 'do-ngu-danh-cho-nam', '10', '0', '1', '', '', '', '2014-04-11 15:17:20', '2014-04-11 15:18:51');

-- ----------------------------
-- Table structure for `contact`
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `contact_email_index` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of contact
-- ----------------------------
INSERT INTO contact VALUES ('7', 'Lorem ipsum dolor sit amet.', 'hoangnham01@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum turpis, commodo nec molestie sed, sagittis quis tortor. Donec eu felis et ante tempor malesuada ut ut eros. Donec a diam id mauris eleifend eleifend pretium sed libero. Integer a leo nunc.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit.\r\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.', '0', '2014-03-28 15:55:18', '2014-03-28 15:55:18');
INSERT INTO contact VALUES ('8', 'Góp ý', 'hoangnhamcntt@gmail.com', 'Website của bạn quá xấu', '1', '2014-04-11 02:05:37', '2014-04-11 15:12:30');

-- ----------------------------
-- Table structure for `districts`
-- ----------------------------
DROP TABLE IF EXISTS `districts`;
CREATE TABLE `districts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `province_id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=902 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of districts
-- ----------------------------
INSERT INTO districts VALUES ('127', 'Quận 1', '3', '1');
INSERT INTO districts VALUES ('128', 'Quận 2', '3', '2');
INSERT INTO districts VALUES ('129', 'Quận 3', '3', '3');
INSERT INTO districts VALUES ('130', 'Quận 4', '3', '4');
INSERT INTO districts VALUES ('131', 'Quận 5', '3', '5');
INSERT INTO districts VALUES ('132', 'Quận 6', '3', '6');
INSERT INTO districts VALUES ('133', 'Quận 7', '3', '7');
INSERT INTO districts VALUES ('134', 'Quận 8', '3', '8');
INSERT INTO districts VALUES ('135', 'Quận 9', '3', '9');
INSERT INTO districts VALUES ('136', 'Quận 10', '3', '10');
INSERT INTO districts VALUES ('137', 'Quận 11', '3', '11');
INSERT INTO districts VALUES ('138', 'Quận 12', '3', '12');
INSERT INTO districts VALUES ('139', 'Quận Phú Nhuận', '3', '13');
INSERT INTO districts VALUES ('140', 'Quận Bình Thạnh', '3', '14');
INSERT INTO districts VALUES ('141', 'Quận Tân Bình', '3', '15');
INSERT INTO districts VALUES ('142', 'Quận Tân Phú', '3', '16');
INSERT INTO districts VALUES ('143', 'Quận Gò Vấp', '3', '17');
INSERT INTO districts VALUES ('144', 'Quận Thủ Đức', '3', '18');
INSERT INTO districts VALUES ('145', 'Quận Bình Tân', '3', '19');
INSERT INTO districts VALUES ('146', 'Huyện Bình Chánh', '3', '20');
INSERT INTO districts VALUES ('147', 'Huyện Củ Chi', '3', '21');
INSERT INTO districts VALUES ('149', 'Huyện Nhà Bè', '3', '22');
INSERT INTO districts VALUES ('150', 'Huyện Cần Giờ', '3', '23');
INSERT INTO districts VALUES ('856', 'Huyện Hóc Môn', '3', '24');
INSERT INTO districts VALUES ('113', 'Bắc Từ Liêm', '2', '1');
INSERT INTO districts VALUES ('114', 'Thanh Trì', '2', '2');
INSERT INTO districts VALUES ('115', 'Sóc Sơn', '2', '3');
INSERT INTO districts VALUES ('116', 'Gia Lâm', '2', '4');
INSERT INTO districts VALUES ('117', 'Đông Anh', '2', '5');
INSERT INTO districts VALUES ('118', 'Long Biên', '2', '6');
INSERT INTO districts VALUES ('119', 'Hoàng Mai', '2', '7');
INSERT INTO districts VALUES ('120', 'Cầu Giấy', '2', '8');
INSERT INTO districts VALUES ('121', 'Tây Hồ', '2', '9');
INSERT INTO districts VALUES ('122', 'Thanh Xuân', '2', '10');
INSERT INTO districts VALUES ('123', 'Hai Bà Trưng', '2', '11');
INSERT INTO districts VALUES ('124', 'Đống Đa', '2', '12');
INSERT INTO districts VALUES ('125', 'Ba Đình', '2', '13');
INSERT INTO districts VALUES ('126', 'Hoàn Kiếm', '2', '14');
INSERT INTO districts VALUES ('450', 'Mê Linh', '2', '15');
INSERT INTO districts VALUES ('840', 'Vân Điền', '2', '16');
INSERT INTO districts VALUES ('857', 'Ba Vì', '2', '17');
INSERT INTO districts VALUES ('858', 'Chương Mỹ', '2', '18');
INSERT INTO districts VALUES ('859', 'Đan Phượng', '2', '19');
INSERT INTO districts VALUES ('860', 'Hà Đông', '2', '20');
INSERT INTO districts VALUES ('861', 'Hoài Đức', '2', '21');
INSERT INTO districts VALUES ('862', 'Mỹ Đức', '2', '22');
INSERT INTO districts VALUES ('863', 'Phú Xuyên', '2', '23');
INSERT INTO districts VALUES ('864', 'Phúc Thọ', '2', '24');
INSERT INTO districts VALUES ('865', 'Quốc Oai', '2', '25');
INSERT INTO districts VALUES ('866', 'Sơn Tây', '2', '26');
INSERT INTO districts VALUES ('867', 'Thạch Thất', '2', '27');
INSERT INTO districts VALUES ('868', 'Thanh Oai', '2', '28');
INSERT INTO districts VALUES ('869', 'Thường Tín', '2', '29');
INSERT INTO districts VALUES ('871', 'Ứng Hòa', '2', '30');
INSERT INTO districts VALUES ('626', 'Lục Yên', '10', '1');
INSERT INTO districts VALUES ('627', 'Mù Căng Chải', '10', '2');
INSERT INTO districts VALUES ('628', 'Trạm Tấu', '10', '3');
INSERT INTO districts VALUES ('629', 'Trấn Yên', '10', '4');
INSERT INTO districts VALUES ('630', 'Văn Chấn', '10', '5');
INSERT INTO districts VALUES ('631', 'Văn Yên', '10', '6');
INSERT INTO districts VALUES ('632', 'Yên Bái', '10', '7');
INSERT INTO districts VALUES ('633', 'Yên Bình', '10', '8');
INSERT INTO districts VALUES ('448', 'Bình Xuyên', '11', '1');
INSERT INTO districts VALUES ('449', 'Lập Thạch', '11', '2');
INSERT INTO districts VALUES ('451', 'Tam Dương', '11', '3');
INSERT INTO districts VALUES ('452', 'Vĩnh Tường', '11', '4');
INSERT INTO districts VALUES ('453', 'Vĩnh Yên', '11', '5');
INSERT INTO districts VALUES ('454', 'Yên Lạc', '11', '6');
INSERT INTO districts VALUES ('850', 'Phúc Yên', '11', '7');
INSERT INTO districts VALUES ('853', 'Tam Đảo', '11', '8');
INSERT INTO districts VALUES ('812', 'Bình Minh', '12', '1');
INSERT INTO districts VALUES ('813', 'Long Hồ', '12', '2');
INSERT INTO districts VALUES ('814', 'Mang Thít', '12', '3');
INSERT INTO districts VALUES ('815', 'Tam Bình', '12', '4');
INSERT INTO districts VALUES ('816', 'Trà Ôn', '12', '5');
INSERT INTO districts VALUES ('817', 'Vĩnh Long', '12', '6');
INSERT INTO districts VALUES ('818', 'Vũng Liêm', '12', '7');
INSERT INTO districts VALUES ('620', 'Chiêm Hóa', '13', '1');
INSERT INTO districts VALUES ('621', 'Hàm Yên', '13', '2');
INSERT INTO districts VALUES ('622', 'Na Hang', '13', '3');
INSERT INTO districts VALUES ('623', 'Sơn Dương', '13', '4');
INSERT INTO districts VALUES ('624', 'Tuyên Quang', '13', '5');
INSERT INTO districts VALUES ('625', 'Yên Sơn', '13', '6');
INSERT INTO districts VALUES ('440', 'Càng Long', '14', '1');
INSERT INTO districts VALUES ('441', 'Cầu Kè', '14', '2');
INSERT INTO districts VALUES ('442', 'Cầu Ngang', '14', '3');
INSERT INTO districts VALUES ('443', 'Châu Thành', '14', '4');
INSERT INTO districts VALUES ('444', 'Duyên Hải', '14', '5');
INSERT INTO districts VALUES ('445', 'Tiểu Cần', '14', '6');
INSERT INTO districts VALUES ('446', 'Trà Cú', '14', '7');
INSERT INTO districts VALUES ('447', 'Trà Vinh', '14', '8');
INSERT INTO districts VALUES ('803', 'Cái Bè', '15', '1');
INSERT INTO districts VALUES ('804', 'Cai Lậy', '15', '2');
INSERT INTO districts VALUES ('805', 'Châu Thành', '15', '3');
INSERT INTO districts VALUES ('806', 'Chợ Gạo', '15', '4');
INSERT INTO districts VALUES ('807', 'Gò Công', '15', '5');
INSERT INTO districts VALUES ('808', 'Gò Công Đông', '15', '6');
INSERT INTO districts VALUES ('809', 'Gò Công Tây', '15', '7');
INSERT INTO districts VALUES ('810', 'Mỹ Tho', '15', '8');
INSERT INTO districts VALUES ('811', 'Tân Phước', '15', '9');
INSERT INTO districts VALUES ('423', 'A Lưới', '16', '1');
INSERT INTO districts VALUES ('424', 'Huế', '16', '2');
INSERT INTO districts VALUES ('425', 'Hương Thủy', '16', '3');
INSERT INTO districts VALUES ('426', 'Hương Trà', '16', '4');
INSERT INTO districts VALUES ('427', 'Nam Đông', '16', '5');
INSERT INTO districts VALUES ('428', 'Phong Điền', '16', '6');
INSERT INTO districts VALUES ('429', 'Phú Lộc', '16', '7');
INSERT INTO districts VALUES ('430', 'Phú Vang', '16', '8');
INSERT INTO districts VALUES ('431', 'Quảng Điền', '16', '9');
INSERT INTO districts VALUES ('776', 'Bá Thước', '17', '1');
INSERT INTO districts VALUES ('777', 'Bỉm Sơn', '17', '2');
INSERT INTO districts VALUES ('778', 'Cẩm Thủy', '17', '3');
INSERT INTO districts VALUES ('779', 'Đông Sơn', '17', '4');
INSERT INTO districts VALUES ('780', 'Hà Trung', '17', '5');
INSERT INTO districts VALUES ('781', 'Hậu Lộc', '17', '6');
INSERT INTO districts VALUES ('782', 'Hoằng Hóa', '17', '7');
INSERT INTO districts VALUES ('783', 'Lang Chánh', '17', '8');
INSERT INTO districts VALUES ('784', 'Mường Lát', '17', '9');
INSERT INTO districts VALUES ('785', 'Nga Sơn', '17', '10');
INSERT INTO districts VALUES ('786', 'Ngọc Lặc', '17', '11');
INSERT INTO districts VALUES ('787', 'Như Thanh', '17', '12');
INSERT INTO districts VALUES ('788', 'Như Xuân', '17', '13');
INSERT INTO districts VALUES ('789', 'Nông Cống', '17', '14');
INSERT INTO districts VALUES ('790', 'Quan Hóa', '17', '15');
INSERT INTO districts VALUES ('791', 'Quan Sơn', '17', '16');
INSERT INTO districts VALUES ('792', 'Quảng Xương', '17', '17');
INSERT INTO districts VALUES ('793', 'Sầm Sơn', '17', '18');
INSERT INTO districts VALUES ('794', 'Thạch Thành', '17', '19');
INSERT INTO districts VALUES ('795', 'Thanh Hóa', '17', '20');
INSERT INTO districts VALUES ('796', 'Thọ Xuân', '17', '21');
INSERT INTO districts VALUES ('797', 'Thường Xuân', '17', '22');
INSERT INTO districts VALUES ('798', 'Tĩnh Gia', '17', '23');
INSERT INTO districts VALUES ('799', 'Thiệu Hóa', '17', '24');
INSERT INTO districts VALUES ('800', 'Triệu Sơn', '17', '25');
INSERT INTO districts VALUES ('801', 'Vĩnh Lộc', '17', '26');
INSERT INTO districts VALUES ('802', 'Yên Định', '17', '27');
INSERT INTO districts VALUES ('611', 'Đại Từ', '18', '1');
INSERT INTO districts VALUES ('612', 'Định Hóa', '18', '2');
INSERT INTO districts VALUES ('613', 'Đồng Hỷ', '18', '3');
INSERT INTO districts VALUES ('614', 'Phổ Yên', '18', '4');
INSERT INTO districts VALUES ('615', 'Phú Bình', '18', '5');
INSERT INTO districts VALUES ('616', 'Phú Lương', '18', '6');
INSERT INTO districts VALUES ('617', 'Sông Công', '18', '7');
INSERT INTO districts VALUES ('618', 'Thái Nguyên', '18', '8');
INSERT INTO districts VALUES ('619', 'Võ Nhai', '18', '9');
INSERT INTO districts VALUES ('432', 'Đông Hưng', '19', '1');
INSERT INTO districts VALUES ('433', 'Hưng Hà', '19', '2');
INSERT INTO districts VALUES ('434', 'Kiến Xương', '19', '3');
INSERT INTO districts VALUES ('435', 'Quỳnh Phụ', '19', '4');
INSERT INTO districts VALUES ('436', 'Thái Bình', '19', '5');
INSERT INTO districts VALUES ('437', 'Thái Thụy', '19', '6');
INSERT INTO districts VALUES ('438', 'Tiền Hải', '19', '7');
INSERT INTO districts VALUES ('439', 'Vũ Thư', '19', '8');
INSERT INTO districts VALUES ('602', 'Bến Cầu', '21', '1');
INSERT INTO districts VALUES ('603', 'Châu Thành', '21', '2');
INSERT INTO districts VALUES ('604', 'Dương Minh Châu', '21', '3');
INSERT INTO districts VALUES ('605', 'Gò Dầu', '21', '4');
INSERT INTO districts VALUES ('606', 'Hòa Thành', '21', '5');
INSERT INTO districts VALUES ('607', 'Tân Biên', '21', '6');
INSERT INTO districts VALUES ('608', 'Tân Châu', '21', '7');
INSERT INTO districts VALUES ('609', 'Tây Ninh', '21', '8');
INSERT INTO districts VALUES ('610', 'Trảng Bàng', '21', '9');
INSERT INTO districts VALUES ('766', 'Bắc Yên', '22', '1');
INSERT INTO districts VALUES ('767', 'Mai Sơn', '22', '2');
INSERT INTO districts VALUES ('768', 'Mộc Châu', '22', '3');
INSERT INTO districts VALUES ('769', 'Muờng La', '22', '4');
INSERT INTO districts VALUES ('770', 'Phù Yên', '22', '5');
INSERT INTO districts VALUES ('771', 'Quỳnh Nhai', '22', '6');
INSERT INTO districts VALUES ('772', 'Sơn La', '22', '7');
INSERT INTO districts VALUES ('773', 'Sông Mã', '22', '8');
INSERT INTO districts VALUES ('774', 'Thuận Châu', '22', '9');
INSERT INTO districts VALUES ('775', 'Yên Châu', '22', '10');
INSERT INTO districts VALUES ('874', 'Sốp Cộp', '22', '11');
INSERT INTO districts VALUES ('595', 'Kế Sách', '23', '1');
INSERT INTO districts VALUES ('596', 'Long Phú', '23', '2');
INSERT INTO districts VALUES ('597', 'Mỹ Tú', '23', '3');
INSERT INTO districts VALUES ('598', 'Mỹ Xuyên', '23', '4');
INSERT INTO districts VALUES ('599', 'Sóc Trăng', '23', '5');
INSERT INTO districts VALUES ('600', 'Thanh Trị', '23', '6');
INSERT INTO districts VALUES ('601', 'Vĩnh Châu', '23', '7');
INSERT INTO districts VALUES ('414', 'Cam Lộ', '24', '1');
INSERT INTO districts VALUES ('415', 'Đa Krông', '24', '2');
INSERT INTO districts VALUES ('416', 'Đông Hà', '24', '3');
INSERT INTO districts VALUES ('417', 'Gio Linh', '24', '4');
INSERT INTO districts VALUES ('418', 'Hải Lăng', '24', '5');
INSERT INTO districts VALUES ('419', 'Hướng Hóa', '24', '6');
INSERT INTO districts VALUES ('420', 'Quảng Trị', '24', '7');
INSERT INTO districts VALUES ('421', 'Triệu Phong', '24', '8');
INSERT INTO districts VALUES ('422', 'Vĩnh Linh', '24', '9');
INSERT INTO districts VALUES ('753', 'Ba Chế', '25', '1');
INSERT INTO districts VALUES ('754', 'Bình Liêu', '25', '2');
INSERT INTO districts VALUES ('755', 'Cẩm Phả', '25', '3');
INSERT INTO districts VALUES ('756', 'Cô Tô', '25', '4');
INSERT INTO districts VALUES ('757', 'Đông Triều', '25', '5');
INSERT INTO districts VALUES ('758', 'Hạ Long', '25', '6');
INSERT INTO districts VALUES ('759', 'Hoành Bồ', '25', '7');
INSERT INTO districts VALUES ('760', 'Móng Cái', '25', '8');
INSERT INTO districts VALUES ('761', 'Quảng Hà', '25', '9');
INSERT INTO districts VALUES ('762', 'Tiên Yên', '25', '10');
INSERT INTO districts VALUES ('763', 'Uông Bí', '25', '11');
INSERT INTO districts VALUES ('764', 'Vân Đồn', '25', '12');
INSERT INTO districts VALUES ('765', 'Yên Hưng', '25', '13');
INSERT INTO districts VALUES ('582', 'Ba Tơ', '26', '1');
INSERT INTO districts VALUES ('583', 'Bình Sơn', '26', '2');
INSERT INTO districts VALUES ('584', 'Đức Phổ', '26', '3');
INSERT INTO districts VALUES ('585', 'Lý Sơn', '26', '4');
INSERT INTO districts VALUES ('586', 'Minh Long', '26', '5');
INSERT INTO districts VALUES ('587', 'Mộ Đức', '26', '6');
INSERT INTO districts VALUES ('588', 'Nghĩa Hành', '26', '7');
INSERT INTO districts VALUES ('589', 'Quãng Ngãi', '26', '8');
INSERT INTO districts VALUES ('590', 'Sơn Hà', '26', '9');
INSERT INTO districts VALUES ('591', 'Sơn Tây', '26', '10');
INSERT INTO districts VALUES ('592', 'Sơn Tịnh', '26', '11');
INSERT INTO districts VALUES ('593', 'Trà Bồng', '26', '12');
INSERT INTO districts VALUES ('594', 'Tư Nghĩa', '26', '13');
INSERT INTO districts VALUES ('400', 'Đại Lộc', '27', '1');
INSERT INTO districts VALUES ('401', 'Điện Bàn', '27', '2');
INSERT INTO districts VALUES ('402', 'Duy Xuyên', '27', '3');
INSERT INTO districts VALUES ('403', 'Hiên', '27', '4');
INSERT INTO districts VALUES ('404', 'Hiệp Đức', '27', '5');
INSERT INTO districts VALUES ('405', 'Hội An', '27', '6');
INSERT INTO districts VALUES ('406', 'Nam Giang', '27', '7');
INSERT INTO districts VALUES ('407', 'Núi Thành', '27', '8');
INSERT INTO districts VALUES ('408', 'Phước Sơn', '27', '9');
INSERT INTO districts VALUES ('409', 'Quế Sơn', '27', '10');
INSERT INTO districts VALUES ('410', 'Tam Kỳ', '27', '11');
INSERT INTO districts VALUES ('411', 'Thăng Bình', '27', '12');
INSERT INTO districts VALUES ('412', 'Tiên Phước', '27', '13');
INSERT INTO districts VALUES ('413', 'Trà My', '27', '14');
INSERT INTO districts VALUES ('747', 'Bố Trạch', '28', '1');
INSERT INTO districts VALUES ('748', 'Đồng Hới', '28', '2');
INSERT INTO districts VALUES ('749', 'Lệ Thủy', '28', '3');
INSERT INTO districts VALUES ('750', 'Quảng Ninh', '28', '4');
INSERT INTO districts VALUES ('751', 'Quảng Trạch', '28', '5');
INSERT INTO districts VALUES ('752', 'Tuyên Hóa', '28', '6');
INSERT INTO districts VALUES ('880', 'Minh Hóa', '28', '7');
INSERT INTO districts VALUES ('576', 'Đồng Xuân', '29', '1');
INSERT INTO districts VALUES ('577', 'Sơn Hòa', '29', '2');
INSERT INTO districts VALUES ('578', 'Sông Cầu', '29', '3');
INSERT INTO districts VALUES ('579', 'Sông Hinh', '29', '4');
INSERT INTO districts VALUES ('580', 'Tuy An', '29', '5');
INSERT INTO districts VALUES ('581', 'Tuy Hòa', '29', '6');
INSERT INTO districts VALUES ('877', 'Đông Hòa', '29', '7');
INSERT INTO districts VALUES ('878', 'Tây Hòa', '29', '8');
INSERT INTO districts VALUES ('879', 'Phú Hòa', '29', '9');
INSERT INTO districts VALUES ('388', 'Đoan Hùng', '30', '1');
INSERT INTO districts VALUES ('389', 'Hạ Hòa', '30', '2');
INSERT INTO districts VALUES ('390', 'Lâm Thao', '30', '3');
INSERT INTO districts VALUES ('391', 'Phù Ninh', '30', '4');
INSERT INTO districts VALUES ('392', 'Phú Thọ', '30', '5');
INSERT INTO districts VALUES ('393', 'Sông Thao', '30', '6');
INSERT INTO districts VALUES ('394', 'Tam Nông', '30', '7');
INSERT INTO districts VALUES ('395', 'Thanh Ba', '30', '8');
INSERT INTO districts VALUES ('396', 'Thanh Sơn', '30', '9');
INSERT INTO districts VALUES ('397', 'Thanh Thủy', '30', '10');
INSERT INTO districts VALUES ('398', 'Việt Trì', '30', '11');
INSERT INTO districts VALUES ('399', 'Yên Lập', '30', '12');
INSERT INTO districts VALUES ('875', 'Cẩm Khê', '30', '13');
INSERT INTO districts VALUES ('876', 'Tân Sơn', '30', '14');
INSERT INTO districts VALUES ('743', 'Ninh Hải', '31', '1');
INSERT INTO districts VALUES ('744', 'Ninh Phước', '31', '2');
INSERT INTO districts VALUES ('745', 'Ninh Sơn', '31', '3');
INSERT INTO districts VALUES ('746', 'Phan Rang - Tháp Chàm', '31', '4');
INSERT INTO districts VALUES ('568', 'Hoa Lư', '32', '1');
INSERT INTO districts VALUES ('569', 'Kim Sơn', '32', '2');
INSERT INTO districts VALUES ('571', 'Nho Quan', '32', '3');
INSERT INTO districts VALUES ('572', 'Ninh Bình', '32', '4');
INSERT INTO districts VALUES ('573', 'Tam Điệp', '32', '5');
INSERT INTO districts VALUES ('574', 'Yên Khánh', '32', '6');
INSERT INTO districts VALUES ('575', 'Yên Mô', '32', '7');
INSERT INTO districts VALUES ('872', 'Gia Viễn', '32', '8');
INSERT INTO districts VALUES ('369', 'Anh Sơn', '33', '1');
INSERT INTO districts VALUES ('370', 'Con Cuông', '33', '2');
INSERT INTO districts VALUES ('371', 'Cửa Lò', '33', '3');
INSERT INTO districts VALUES ('372', 'Diễn Châu', '33', '4');
INSERT INTO districts VALUES ('373', 'Đô Lương', '33', '5');
INSERT INTO districts VALUES ('374', 'Hưng Nguyên', '33', '6');
INSERT INTO districts VALUES ('375', 'Kỳ Sơn', '33', '7');
INSERT INTO districts VALUES ('376', 'Nam Đàn', '33', '8');
INSERT INTO districts VALUES ('377', 'Nghi Lộc', '33', '9');
INSERT INTO districts VALUES ('378', 'Nghĩa Đàn', '33', '10');
INSERT INTO districts VALUES ('379', 'Quế Phong', '33', '11');
INSERT INTO districts VALUES ('380', 'Quỳ Châu', '33', '12');
INSERT INTO districts VALUES ('381', 'Quỳ Hợp', '33', '13');
INSERT INTO districts VALUES ('382', 'Quỳnh Lưu', '33', '14');
INSERT INTO districts VALUES ('383', 'Tân Kỳ', '33', '15');
INSERT INTO districts VALUES ('384', 'Thanh Chương', '33', '16');
INSERT INTO districts VALUES ('385', 'Tương Dương', '33', '17');
INSERT INTO districts VALUES ('386', 'Vinh', '33', '18');
INSERT INTO districts VALUES ('387', 'Yên Thành', '33', '19');
INSERT INTO districts VALUES ('883', 'Thái Hòa', '33', '20');
INSERT INTO districts VALUES ('358', 'Giao Thủy', '34', '1');
INSERT INTO districts VALUES ('360', 'Hải Hậu', '34', '2');
INSERT INTO districts VALUES ('361', 'Mỹ Lộc', '34', '3');
INSERT INTO districts VALUES ('362', 'Nam Định', '34', '4');
INSERT INTO districts VALUES ('363', 'Nam Trực', '34', '5');
INSERT INTO districts VALUES ('364', 'Nghĩa Hưng', '34', '6');
INSERT INTO districts VALUES ('365', 'Trực Ninh', '34', '7');
INSERT INTO districts VALUES ('366', 'Vụ Bản', '34', '8');
INSERT INTO districts VALUES ('367', 'Xuân Trường', '34', '9');
INSERT INTO districts VALUES ('368', 'Ý Yên', '34', '10');
INSERT INTO districts VALUES ('341', 'Bến Lức', '35', '1');
INSERT INTO districts VALUES ('344', 'Cần Đước', '35', '2');
INSERT INTO districts VALUES ('345', 'Cần Giuộc', '35', '3');
INSERT INTO districts VALUES ('346', 'Châu Thành', '35', '4');
INSERT INTO districts VALUES ('347', 'Đức Hòa', '35', '5');
INSERT INTO districts VALUES ('348', 'Đức Huệ', '35', '6');
INSERT INTO districts VALUES ('349', 'Mộc Hóa', '35', '7');
INSERT INTO districts VALUES ('350', 'Tân An', '35', '8');
INSERT INTO districts VALUES ('351', 'Tân Hưng', '35', '9');
INSERT INTO districts VALUES ('352', 'Tân Thạnh', '35', '10');
INSERT INTO districts VALUES ('354', 'Tân Trụ', '35', '11');
INSERT INTO districts VALUES ('355', 'Thạnh Hóa', '35', '12');
INSERT INTO districts VALUES ('356', 'Thủ Thừa', '35', '13');
INSERT INTO districts VALUES ('357', 'Vĩnh Hưng', '35', '14');
INSERT INTO districts VALUES ('849', 'Liên Hưng', '35', '15');
INSERT INTO districts VALUES ('306', 'Bắc Hà', '36', '1');
INSERT INTO districts VALUES ('307', 'Bảo Thắng', '36', '2');
INSERT INTO districts VALUES ('308', 'Bảo Yên', '36', '3');
INSERT INTO districts VALUES ('309', 'Bát Xát', '36', '4');
INSERT INTO districts VALUES ('310', 'Cam Đường', '36', '5');
INSERT INTO districts VALUES ('311', 'Lào Cai', '36', '6');
INSERT INTO districts VALUES ('312', 'Mường Khương', '36', '7');
INSERT INTO districts VALUES ('313', 'Sa Pa', '36', '8');
INSERT INTO districts VALUES ('314', 'Than Uyên', '36', '9');
INSERT INTO districts VALUES ('315', 'Văn Bàn', '36', '10');
INSERT INTO districts VALUES ('316', 'Xi Ma Cai', '36', '11');
INSERT INTO districts VALUES ('328', 'Bắc Sơn', '37', '1');
INSERT INTO districts VALUES ('329', 'Bình Gia', '37', '2');
INSERT INTO districts VALUES ('330', 'Cao Lăng', '37', '3');
INSERT INTO districts VALUES ('331', 'Cao Lộc', '37', '4');
INSERT INTO districts VALUES ('332', 'Đình Lập', '37', '5');
INSERT INTO districts VALUES ('333', 'Hữu Lũng', '37', '6');
INSERT INTO districts VALUES ('334', 'Lạng Sơn', '37', '7');
INSERT INTO districts VALUES ('336', 'Lộc Bình', '37', '8');
INSERT INTO districts VALUES ('337', 'Tràng Định', '37', '9');
INSERT INTO districts VALUES ('342', 'Văn Lãng', '37', '10');
INSERT INTO districts VALUES ('343', 'Văn Quang', '37', '11');
INSERT INTO districts VALUES ('317', 'Bảo Lâm', '38', '1');
INSERT INTO districts VALUES ('318', 'Bảo Lộc', '38', '2');
INSERT INTO districts VALUES ('319', 'Cát Tiên', '38', '3');
INSERT INTO districts VALUES ('320', 'Đà Lạt', '38', '4');
INSERT INTO districts VALUES ('321', 'Đạ Tẻh', '38', '5');
INSERT INTO districts VALUES ('322', 'Đạ Huoai', '38', '6');
INSERT INTO districts VALUES ('323', 'Di Linh', '38', '7');
INSERT INTO districts VALUES ('324', 'Đơn Dương', '38', '8');
INSERT INTO districts VALUES ('325', 'Đức Trọng', '38', '9');
INSERT INTO districts VALUES ('326', 'Lạc Dương', '38', '10');
INSERT INTO districts VALUES ('327', 'Lâm Hà', '38', '11');
INSERT INTO districts VALUES ('296', 'Điện Biên', '39', '1');
INSERT INTO districts VALUES ('297', 'Điện Biên Đông', '39', '2');
INSERT INTO districts VALUES ('298', 'Điện Biên Phủ', '39', '3');
INSERT INTO districts VALUES ('299', 'Lai Châu', '39', '4');
INSERT INTO districts VALUES ('300', 'Mường Lay', '39', '5');
INSERT INTO districts VALUES ('301', 'Mường Tè', '39', '6');
INSERT INTO districts VALUES ('302', 'Phong Thổ', '39', '7');
INSERT INTO districts VALUES ('303', 'Sìn Hồ', '39', '8');
INSERT INTO districts VALUES ('304', 'Tủa Chùa', '39', '9');
INSERT INTO districts VALUES ('305', 'Tuần Giáo', '39', '10');
INSERT INTO districts VALUES ('290', 'Đắk Glei', '40', '1');
INSERT INTO districts VALUES ('291', 'Đắk Tô', '40', '2');
INSERT INTO districts VALUES ('292', 'Kon Plông', '40', '3');
INSERT INTO districts VALUES ('293', 'Kon Tum', '40', '4');
INSERT INTO districts VALUES ('294', 'Ngọc Hồi', '40', '5');
INSERT INTO districts VALUES ('295', 'Sa Thầy', '40', '6');
INSERT INTO districts VALUES ('715', 'Đắk Glei', '40', '7');
INSERT INTO districts VALUES ('716', 'Đắk Hà', '40', '8');
INSERT INTO districts VALUES ('717', 'Đắk Tô', '40', '9');
INSERT INTO districts VALUES ('718', 'Kon Plông', '40', '10');
INSERT INTO districts VALUES ('719', 'Kon Tum', '40', '11');
INSERT INTO districts VALUES ('720', 'Ngọc Hồi', '40', '12');
INSERT INTO districts VALUES ('721', 'Sa Thầy', '40', '13');
INSERT INTO districts VALUES ('277', 'An Biên', '41', '1');
INSERT INTO districts VALUES ('278', 'An Minh', '41', '2');
INSERT INTO districts VALUES ('279', 'Châu Thành', '41', '3');
INSERT INTO districts VALUES ('280', 'Gò Quao', '41', '4');
INSERT INTO districts VALUES ('281', 'Gồng Giềng', '41', '5');
INSERT INTO districts VALUES ('282', 'Hà Tiên', '41', '6');
INSERT INTO districts VALUES ('283', 'Hòn Đất', '41', '7');
INSERT INTO districts VALUES ('284', 'Kiên Hải', '41', '8');
INSERT INTO districts VALUES ('285', 'Phú Quốc', '41', '9');
INSERT INTO districts VALUES ('286', 'Rạch Giá', '41', '10');
INSERT INTO districts VALUES ('287', 'Tân Hiệp', '41', '11');
INSERT INTO districts VALUES ('288', 'Vĩnh Thuận', '41', '12');
INSERT INTO districts VALUES ('269', 'Nha Trang', '42', '1');
INSERT INTO districts VALUES ('270', 'Khánh Vĩnh', '42', '2');
INSERT INTO districts VALUES ('271', 'Diên Khánh', '42', '3');
INSERT INTO districts VALUES ('272', 'Ninh Hòa', '42', '4');
INSERT INTO districts VALUES ('273', 'Khánh Sơn', '42', '5');
INSERT INTO districts VALUES ('274', 'Cam Ranh', '42', '6');
INSERT INTO districts VALUES ('275', 'Trường Sa', '42', '7');
INSERT INTO districts VALUES ('276', 'Vạn Ninh', '42', '8');
INSERT INTO districts VALUES ('262', 'Ân Thi', '43', '1');
INSERT INTO districts VALUES ('263', 'Hưng Yên', '43', '2');
INSERT INTO districts VALUES ('264', 'Khoái Châu', '43', '3');
INSERT INTO districts VALUES ('265', 'Tiên Lữ', '43', '4');
INSERT INTO districts VALUES ('266', 'Văn Giang', '43', '5');
INSERT INTO districts VALUES ('267', 'Văn Lâm', '43', '6');
INSERT INTO districts VALUES ('268', 'Yên Mỹ', '43', '7');
INSERT INTO districts VALUES ('705', 'Ân Thi', '43', '8');
INSERT INTO districts VALUES ('706', 'Hưng Yên', '43', '9');
INSERT INTO districts VALUES ('707', 'Khoái Châu', '43', '10');
INSERT INTO districts VALUES ('708', 'Kim Động', '43', '11');
INSERT INTO districts VALUES ('709', 'Mỹ Hào', '43', '12');
INSERT INTO districts VALUES ('710', 'Phù Cừ', '43', '13');
INSERT INTO districts VALUES ('224', 'Đà Bắc', '44', '1');
INSERT INTO districts VALUES ('225', 'Hòa Bình', '44', '2');
INSERT INTO districts VALUES ('226', 'Kim Bôi', '44', '3');
INSERT INTO districts VALUES ('227', 'Kỳ Sơn', '44', '4');
INSERT INTO districts VALUES ('228', 'Lạc Sơn', '44', '5');
INSERT INTO districts VALUES ('229', 'Lạc Thủy', '44', '6');
INSERT INTO districts VALUES ('230', 'Lương Sơn', '44', '7');
INSERT INTO districts VALUES ('231', 'Mai Châu', '44', '8');
INSERT INTO districts VALUES ('232', 'Tân Lạc', '44', '9');
INSERT INTO districts VALUES ('233', 'Yên Thủy', '44', '10');
INSERT INTO districts VALUES ('873', 'Cao Phong', '44', '11');
INSERT INTO districts VALUES ('682', 'Châu Thành', '45', '1');
INSERT INTO districts VALUES ('683', 'Long Mỹ', '45', '2');
INSERT INTO districts VALUES ('685', 'Phụng Hiệp', '45', '3');
INSERT INTO districts VALUES ('687', 'Vị Thanh', '45', '4');
INSERT INTO districts VALUES ('688', 'Vị Thủy', '45', '5');
INSERT INTO districts VALUES ('890', 'Châu Thành A', '45', '6');
INSERT INTO districts VALUES ('891', 'Ngã Bảy', '45', '7');
INSERT INTO districts VALUES ('234', 'Bình Giang', '46', '1');
INSERT INTO districts VALUES ('235', 'Cẩm Giàng', '46', '2');
INSERT INTO districts VALUES ('236', 'Chí Linh', '46', '3');
INSERT INTO districts VALUES ('238', 'Gia Lộc', '46', '4');
INSERT INTO districts VALUES ('239', 'Hải Dương', '46', '5');
INSERT INTO districts VALUES ('241', 'Kim Thành', '46', '6');
INSERT INTO districts VALUES ('242', 'Nam Sách', '46', '7');
INSERT INTO districts VALUES ('243', 'Ninh Giang', '46', '8');
INSERT INTO districts VALUES ('244', 'Kinh Môn', '46', '9');
INSERT INTO districts VALUES ('245', 'Ninh Giang', '46', '10');
INSERT INTO districts VALUES ('246', 'Thanh Hà', '46', '11');
INSERT INTO districts VALUES ('247', 'Thanh Miện', '46', '12');
INSERT INTO districts VALUES ('248', 'Từ Kỳ', '46', '13');
INSERT INTO districts VALUES ('214', 'Cẩm Xuyên', '47', '1');
INSERT INTO districts VALUES ('215', 'Can Lộc', '47', '2');
INSERT INTO districts VALUES ('216', 'Đức Thọ', '47', '3');
INSERT INTO districts VALUES ('217', 'Hà Tĩnh', '47', '4');
INSERT INTO districts VALUES ('218', 'Hồng Lĩnh', '47', '5');
INSERT INTO districts VALUES ('219', 'Hương Khê', '47', '6');
INSERT INTO districts VALUES ('220', 'Hương Sơn', '47', '7');
INSERT INTO districts VALUES ('221', 'Kỳ Anh', '47', '8');
INSERT INTO districts VALUES ('222', 'Nghi Xuân', '47', '9');
INSERT INTO districts VALUES ('223', 'Thạch Hà', '47', '10');
INSERT INTO districts VALUES ('881', 'Vũ Quang', '47', '11');
INSERT INTO districts VALUES ('882', 'Lộc Hà', '47', '12');
INSERT INTO districts VALUES ('689', 'Bình Lục', '49', '1');
INSERT INTO districts VALUES ('690', 'Duy Tiên', '49', '2');
INSERT INTO districts VALUES ('691', 'Kim Bảng', '49', '3');
INSERT INTO districts VALUES ('692', 'Lý Nhân', '49', '4');
INSERT INTO districts VALUES ('693', 'Phủ Lý', '49', '5');
INSERT INTO districts VALUES ('694', 'Thanh Liêm', '49', '6');
INSERT INTO districts VALUES ('498', 'Bắc Mê', '50', '1');
INSERT INTO districts VALUES ('499', 'Bắc Quang', '50', '2');
INSERT INTO districts VALUES ('500', 'Đồng Văn', '50', '3');
INSERT INTO districts VALUES ('501', 'Hà Giang', '50', '4');
INSERT INTO districts VALUES ('502', 'Hoàng Su Phì', '50', '5');
INSERT INTO districts VALUES ('503', 'Mèo Vạt', '50', '6');
INSERT INTO districts VALUES ('504', 'Quản Bạ', '50', '7');
INSERT INTO districts VALUES ('505', 'Vị Xuyên', '50', '8');
INSERT INTO districts VALUES ('506', 'Xín Mần', '50', '9');
INSERT INTO districts VALUES ('507', 'Yên Minh', '50', '10');
INSERT INTO districts VALUES ('187', 'An Khê', '51', '1');
INSERT INTO districts VALUES ('188', 'Ayun Pa ', '51', '2');
INSERT INTO districts VALUES ('189', 'Chư Păh', '51', '3');
INSERT INTO districts VALUES ('190', 'Chư Prông  ', '51', '4');
INSERT INTO districts VALUES ('191', 'Chư Sê ', '51', '5');
INSERT INTO districts VALUES ('192', 'Đức Cơ  ', '51', '6');
INSERT INTO districts VALUES ('193', 'KBang  ', '51', '7');
INSERT INTO districts VALUES ('194', 'Krông Chro', '51', '8');
INSERT INTO districts VALUES ('195', 'Krông Pa ', '51', '9');
INSERT INTO districts VALUES ('196', 'La Grai  ', '51', '10');
INSERT INTO districts VALUES ('197', 'Mang Yang ', '51', '11');
INSERT INTO districts VALUES ('198', 'Pleiku', '51', '12');
INSERT INTO districts VALUES ('826', 'Cao Lãnh', '52', '1');
INSERT INTO districts VALUES ('827', 'Châu Thành', '52', '2');
INSERT INTO districts VALUES ('828', 'Hồng Ngự', '52', '3');
INSERT INTO districts VALUES ('829', 'Lai Vung', '52', '4');
INSERT INTO districts VALUES ('830', 'Lấp Vò', '52', '5');
INSERT INTO districts VALUES ('831', 'Tam Nông', '52', '6');
INSERT INTO districts VALUES ('832', 'Tân Hồng', '52', '7');
INSERT INTO districts VALUES ('833', 'Thanh Bình', '52', '8');
INSERT INTO districts VALUES ('834', 'Tháp Mười', '52', '9');
INSERT INTO districts VALUES ('835', 'Xa Đéc', '52', '10');
INSERT INTO districts VALUES ('634', 'Biên Hòa', '53', '1');
INSERT INTO districts VALUES ('635', 'Định Quán', '53', '2');
INSERT INTO districts VALUES ('636', 'Long Khánh', '53', '3');
INSERT INTO districts VALUES ('637', 'Long Thành', '53', '4');
INSERT INTO districts VALUES ('638', 'Nhơn Trạch', '53', '5');
INSERT INTO districts VALUES ('639', 'Tân Phú', '53', '6');
INSERT INTO districts VALUES ('640', 'Thống Nhất', '53', '7');
INSERT INTO districts VALUES ('641', 'Vĩnh Cừu', '53', '8');
INSERT INTO districts VALUES ('642', 'Xuân Lộc', '53', '9');
INSERT INTO districts VALUES ('838', 'Trảng Bom', '53', '10');
INSERT INTO districts VALUES ('455', 'Buôn Đôn', '56', '1');
INSERT INTO districts VALUES ('456', 'Buôn Ma Thuột', '56', '2');
INSERT INTO districts VALUES ('457', 'Cư Jút', '56', '3');
INSERT INTO districts VALUES ('458', 'Cư M\'gar', '56', '4');
INSERT INTO districts VALUES ('459', 'Đắk Mil', '56', '5');
INSERT INTO districts VALUES ('460', 'Đắk Nông', '56', '6');
INSERT INTO districts VALUES ('461', 'Đắk R\'lấp', '56', '7');
INSERT INTO districts VALUES ('462', 'Ea H\'leo', '56', '8');
INSERT INTO districts VALUES ('463', 'Ea Kra', '56', '9');
INSERT INTO districts VALUES ('464', 'Ea Súp', '56', '10');
INSERT INTO districts VALUES ('465', 'Krông A Na', '56', '11');
INSERT INTO districts VALUES ('466', 'Krông Bông', '56', '12');
INSERT INTO districts VALUES ('467', 'Krông Búk', '56', '13');
INSERT INTO districts VALUES ('468', 'Krông Năng', '56', '14');
INSERT INTO districts VALUES ('469', 'Krông Nô', '56', '15');
INSERT INTO districts VALUES ('470', 'Krông Pắc', '56', '16');
INSERT INTO districts VALUES ('471', 'Lắk', '56', '17');
INSERT INTO districts VALUES ('472', 'M\'Đrắt', '56', '18');
INSERT INTO districts VALUES ('176', 'Bảo Lạc', '57', '1');
INSERT INTO districts VALUES ('177', 'Cao Bắng', '57', '2');
INSERT INTO districts VALUES ('178', 'Hạ Lang', '57', '3');
INSERT INTO districts VALUES ('179', 'Hà Quảng', '57', '4');
INSERT INTO districts VALUES ('180', 'Hòa An', '57', '5');
INSERT INTO districts VALUES ('181', 'Nguyên Bình', '57', '6');
INSERT INTO districts VALUES ('182', 'Quảng Hòa', '57', '7');
INSERT INTO districts VALUES ('183', 'Thạch An', '57', '8');
INSERT INTO districts VALUES ('184', 'Thông Nông', '57', '9');
INSERT INTO districts VALUES ('185', 'Trà Lĩnh', '57', '10');
INSERT INTO districts VALUES ('186', 'Trùng Khánh', '57', '11');
INSERT INTO districts VALUES ('491', 'Cà Mau', '58', '1');
INSERT INTO districts VALUES ('492', 'Cái Nước', '58', '2');
INSERT INTO districts VALUES ('493', 'Đầm Dơi', '58', '3');
INSERT INTO districts VALUES ('494', 'Ngọc Hiển', '58', '4');
INSERT INTO districts VALUES ('495', 'Thới Bình', '58', '5');
INSERT INTO districts VALUES ('496', 'Trần Văn Thời', '58', '6');
INSERT INTO districts VALUES ('497', 'U Minh', '58', '7');
INSERT INTO districts VALUES ('887', 'Năm Căn', '58', '8');
INSERT INTO districts VALUES ('888', 'Phú Tân', '58', '9');
INSERT INTO districts VALUES ('654', 'Bắc Bình', '59', '1');
INSERT INTO districts VALUES ('655', 'Đức Linh', '59', '2');
INSERT INTO districts VALUES ('656', 'Hàm Tân', '59', '3');
INSERT INTO districts VALUES ('657', 'Hàm Thuận Bắc', '59', '4');
INSERT INTO districts VALUES ('658', 'Hàm Thuận Nam', '59', '5');
INSERT INTO districts VALUES ('659', 'Phan Thiết', '59', '6');
INSERT INTO districts VALUES ('660', 'Phú Quí', '59', '7');
INSERT INTO districts VALUES ('661', 'Tánh Linh', '59', '8');
INSERT INTO districts VALUES ('662', 'Tuy Phong', '59', '9');
INSERT INTO districts VALUES ('897', 'La Gi', '59', '10');
INSERT INTO districts VALUES ('836', 'Bình Long', '60', '1');
INSERT INTO districts VALUES ('839', 'Phước Long', '60', '2');
INSERT INTO districts VALUES ('851', 'Bù Ðăng', '60', '3');
INSERT INTO districts VALUES ('852', 'Chơn Thành', '60', '4');
INSERT INTO districts VALUES ('473', 'Bến Cát', '61', '1');
INSERT INTO districts VALUES ('474', 'Dầu Tiếng', '61', '2');
INSERT INTO districts VALUES ('475', 'Dĩ An', '61', '3');
INSERT INTO districts VALUES ('476', 'Tân Uyên', '61', '4');
INSERT INTO districts VALUES ('477', 'Thủ Dầu Một', '61', '5');
INSERT INTO districts VALUES ('478', 'Thuận An', '61', '6');
INSERT INTO districts VALUES ('841', 'Lái Thiêu', '61', '7');
INSERT INTO districts VALUES ('896', 'Phú Giáo', '61', '8');
INSERT INTO districts VALUES ('158', 'An Lão', '62', '1');
INSERT INTO districts VALUES ('159', 'An Nhơn', '62', '2');
INSERT INTO districts VALUES ('160', 'Hoài Ân', '62', '3');
INSERT INTO districts VALUES ('161', 'Hoài Nhơn', '62', '4');
INSERT INTO districts VALUES ('162', 'Phù Cát', '62', '5');
INSERT INTO districts VALUES ('163', 'Phù Mỹ', '62', '6');
INSERT INTO districts VALUES ('164', 'Qui Nhơn', '62', '7');
INSERT INTO districts VALUES ('165', 'Tây Sơn', '62', '8');
INSERT INTO districts VALUES ('166', 'Tuy Phước', '62', '9');
INSERT INTO districts VALUES ('167', 'Vân Canh', '62', '10');
INSERT INTO districts VALUES ('168', 'Vĩnh Thạnh', '62', '11');
INSERT INTO districts VALUES ('673', 'Ba Tri', '63', '1');
INSERT INTO districts VALUES ('674', 'Bến Tre', '63', '2');
INSERT INTO districts VALUES ('675', 'Bình Đại', '63', '3');
INSERT INTO districts VALUES ('676', 'Châu Thành', '63', '4');
INSERT INTO districts VALUES ('677', 'Chợ Lách', '63', '5');
INSERT INTO districts VALUES ('678', 'Giồng Trôm', '63', '6');
INSERT INTO districts VALUES ('679', 'Mỏ Cày', '63', '7');
INSERT INTO districts VALUES ('680', 'Thạnh Phú', '63', '8');
INSERT INTO districts VALUES ('483', 'Bắc Ninh', '64', '1');
INSERT INTO districts VALUES ('484', 'Gia Bình', '64', '2');
INSERT INTO districts VALUES ('485', 'Lương Tài', '64', '3');
INSERT INTO districts VALUES ('486', 'Quế Võ', '64', '4');
INSERT INTO districts VALUES ('487', 'Thuận Thành', '64', '5');
INSERT INTO districts VALUES ('488', 'Tiên Du', '64', '6');
INSERT INTO districts VALUES ('489', 'Từ Sơn', '64', '7');
INSERT INTO districts VALUES ('490', 'Yên Phong', '64', '8');
INSERT INTO districts VALUES ('479', 'Bạc Liêu', '65', '1');
INSERT INTO districts VALUES ('480', 'Giá Rai', '65', '2');
INSERT INTO districts VALUES ('481', 'Hồng Dân', '65', '3');
INSERT INTO districts VALUES ('482', 'Vĩnh Lợi', '65', '4');
INSERT INTO districts VALUES ('884', 'Phước Long', '65', '5');
INSERT INTO districts VALUES ('885', 'Đông Hải', '65', '6');
INSERT INTO districts VALUES ('886', 'Hòa Bình', '65', '7');
INSERT INTO districts VALUES ('169', 'Ba Bể', '66', '1');
INSERT INTO districts VALUES ('170', 'Bắc Kạn', '66', '2');
INSERT INTO districts VALUES ('171', 'Bạch Thông ', '66', '3');
INSERT INTO districts VALUES ('172', 'Chợ Đồn', '66', '4');
INSERT INTO districts VALUES ('173', 'Chợ Mới', '66', '5');
INSERT INTO districts VALUES ('174', 'Na Rì', '66', '6');
INSERT INTO districts VALUES ('175', 'Ngân Sơn', '66', '7');
INSERT INTO districts VALUES ('663', 'Bắc Giang', '67', '1');
INSERT INTO districts VALUES ('664', 'Hiệp Hòa', '67', '2');
INSERT INTO districts VALUES ('665', 'Lạng Giang', '67', '3');
INSERT INTO districts VALUES ('666', 'Lục Nam', '67', '4');
INSERT INTO districts VALUES ('667', 'Lục Ngạn', '67', '5');
INSERT INTO districts VALUES ('668', 'Sơn Động', '67', '6');
INSERT INTO districts VALUES ('669', 'Tân Yên', '67', '7');
INSERT INTO districts VALUES ('670', 'Việt Yên', '67', '8');
INSERT INTO districts VALUES ('671', 'Yên Dũng', '67', '9');
INSERT INTO districts VALUES ('672', 'Yên Thế', '67', '10');
INSERT INTO districts VALUES ('151', 'Bà Rịa', '68', '1');
INSERT INTO districts VALUES ('152', 'Châu Đất', '68', '2');
INSERT INTO districts VALUES ('153', 'Côn Đảo', '68', '3');
INSERT INTO districts VALUES ('154', 'Long Đất', '68', '4');
INSERT INTO districts VALUES ('155', 'Tân Thành', '68', '5');
INSERT INTO districts VALUES ('156', 'Vũng Tàu', '68', '6');
INSERT INTO districts VALUES ('157', 'Xuyên Mộc', '68', '7');
INSERT INTO districts VALUES ('898', 'Long Điền', '68', '8');
INSERT INTO districts VALUES ('899', 'Đất Đỏ', '68', '9');
INSERT INTO districts VALUES ('643', 'An Phú', '69', '1');
INSERT INTO districts VALUES ('644', 'Châu Đốc', '69', '2');
INSERT INTO districts VALUES ('645', 'Châu Phú', '69', '3');
INSERT INTO districts VALUES ('646', 'Châu Thành', '69', '4');
INSERT INTO districts VALUES ('647', 'Chợ Mới', '69', '5');
INSERT INTO districts VALUES ('648', 'Long Xuyên', '69', '6');
INSERT INTO districts VALUES ('649', 'Phú Tân', '69', '7');
INSERT INTO districts VALUES ('650', 'Tân Châu', '69', '8');
INSERT INTO districts VALUES ('651', 'Thoại Sơn', '69', '9');
INSERT INTO districts VALUES ('652', 'Tịnh Biên', '69', '10');
INSERT INTO districts VALUES ('653', 'Tri Tôn', '69', '11');
INSERT INTO districts VALUES ('249', 'An Hải', '70', '1');
INSERT INTO districts VALUES ('250', 'An Lão', '70', '2');
INSERT INTO districts VALUES ('251', 'Bạch Long Vỹ', '70', '3');
INSERT INTO districts VALUES ('253', 'Đồ Sơn', '70', '4');
INSERT INTO districts VALUES ('254', 'Hồng Bàng', '70', '5');
INSERT INTO districts VALUES ('255', 'Kiến An', '70', '6');
INSERT INTO districts VALUES ('256', 'Kiến Thụy', '70', '7');
INSERT INTO districts VALUES ('257', 'Lê Chân', '70', '8');
INSERT INTO districts VALUES ('258', 'Ngô Quyền', '70', '9');
INSERT INTO districts VALUES ('259', 'Thủy Nguyên', '70', '10');
INSERT INTO districts VALUES ('260', 'Tiên Lãng', '70', '11');
INSERT INTO districts VALUES ('261', 'Vĩnh Bảo', '70', '12');
INSERT INTO districts VALUES ('854', 'Cát Bà', '70', '13');
INSERT INTO districts VALUES ('900', 'Dương Kinh', '70', '14');
INSERT INTO districts VALUES ('819', 'Đảo Hòang Sa', '71', '1');
INSERT INTO districts VALUES ('820', 'Hải Châu', '71', '2');
INSERT INTO districts VALUES ('821', 'Hòa Vang', '71', '3');
INSERT INTO districts VALUES ('822', 'Liên Chiểu', '71', '4');
INSERT INTO districts VALUES ('823', 'Ngũ Hành Sơn', '71', '5');
INSERT INTO districts VALUES ('824', 'Sơn Trà', '71', '6');
INSERT INTO districts VALUES ('825', 'Thanh Khê', '71', '7');
INSERT INTO districts VALUES ('844', 'Cẩm Lệ', '71', '8');
INSERT INTO districts VALUES ('681', 'Cần Thơ', '72', '1');
INSERT INTO districts VALUES ('684', 'Ô Môn', '72', '2');
INSERT INTO districts VALUES ('686', 'Thốt Nốt', '72', '3');
INSERT INTO districts VALUES ('837', 'Ninh Kiều', '72', '4');
INSERT INTO districts VALUES ('848', 'Cái Răng', '72', '5');
INSERT INTO districts VALUES ('855', 'Bình Thủy', '72', '6');
INSERT INTO districts VALUES ('892', 'Phong Điền', '72', '7');
INSERT INTO districts VALUES ('893', 'Cờ Đỏ', '72', '8');
INSERT INTO districts VALUES ('894', 'Thới Lai', '72', '9');
INSERT INTO districts VALUES ('895', 'Vĩnh Thạnh', '72', '10');
INSERT INTO districts VALUES ('901', 'Nam Từ Liêm', '2', '31');

-- ----------------------------
-- Table structure for `migrations`
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO migrations VALUES ('2014_02_17_110336_create_attribute', '1');
INSERT INTO migrations VALUES ('2014_02_17_120529_create_users', '1');
INSERT INTO migrations VALUES ('2014_02_21_172605_create_attribute_group', '1');
INSERT INTO migrations VALUES ('2014_02_25_225251_create_products', '1');
INSERT INTO migrations VALUES ('2014_03_02_014838_create_categories_table', '1');
INSERT INTO migrations VALUES ('2014_03_07_050244_create_table_newsletter', '1');
INSERT INTO migrations VALUES ('2014_03_07_050319_create_table_faq', '1');
INSERT INTO migrations VALUES ('2014_03_07_050336_create_table_setting', '1');
INSERT INTO migrations VALUES ('2014_03_07_050348_create_table_setting_meta', '1');
INSERT INTO migrations VALUES ('2014_03_07_050440_create_table_order', '1');
INSERT INTO migrations VALUES ('2014_03_07_050528_create_table_order_items', '2');
INSERT INTO migrations VALUES ('2014_03_07_050543_create_table_order_items_comment', '2');
INSERT INTO migrations VALUES ('2014_03_07_050623_create_table_user_meta', '2');
INSERT INTO migrations VALUES ('2014_03_07_050640_create_table_cart', '2');
INSERT INTO migrations VALUES ('2014_03_07_053127_create_table_banner', '2');
INSERT INTO migrations VALUES ('2014_03_07_053144_create_table_today_sale', '2');
INSERT INTO migrations VALUES ('2014_03_07_050608_create_table_user_address', '3');
INSERT INTO migrations VALUES ('2014_03_15_130047_entrust_setup_tables', '4');
INSERT INTO migrations VALUES ('2014_03_16_160353_create_tabe_contact', '4');
INSERT INTO migrations VALUES ('2014_02_18_125454_create_categories', '5');
INSERT INTO migrations VALUES ('2014_02_20_034803_create_category', '5');
INSERT INTO migrations VALUES ('2014_04_01_103634_create_wishlist', '5');
INSERT INTO migrations VALUES ('2014_04_01_103634_create_favorite', '6');

-- ----------------------------
-- Table structure for `newsletter`
-- ----------------------------
DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE `newsletter` (
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of newsletter
-- ----------------------------
INSERT INTO newsletter VALUES ('hoangnhamcntt@gmail.com', '1', '2014-03-17 07:32:50', '2014-03-17 07:32:50');
INSERT INTO newsletter VALUES ('hoangnham01@gmail.com', '1', '2014-03-24 14:36:49', '2014-03-24 14:36:49');
INSERT INTO newsletter VALUES ('hoangnham01@gmail.com.sds.sd', '1', '2014-04-01 19:23:15', '2014-04-01 19:23:15');
INSERT INTO newsletter VALUES ('hoangnhamcntt@gmail.com.vn', '1', '2014-04-06 18:28:55', '2014-04-06 18:28:55');
INSERT INTO newsletter VALUES ('user_test@vnpt.vn', '1', '2014-04-06 18:30:34', '2014-04-06 18:30:34');
INSERT INTO newsletter VALUES ('hoangnham@gmail.com.vn', '1', '2014-04-12 05:06:44', '2014-04-12 05:06:44');
INSERT INTO newsletter VALUES ('hoangnhamcnt1t@gmail.com', '1', '2014-04-12 09:16:32', '2014-04-12 09:16:32');
INSERT INTO newsletter VALUES ('hoangnhamcntt80001@gmail.com', '1', '2014-05-11 16:29:22', '2014-05-11 16:29:22');
INSERT INTO newsletter VALUES ('hoangnhamcntt180001@gmail.com', '1', '2014-05-11 16:57:09', '2014-05-11 16:57:09');
INSERT INTO newsletter VALUES ('hoangnhamcntt180001@gmail.com', '1', '2014-05-11 16:58:08', '2014-05-11 16:58:08');
INSERT INTO newsletter VALUES ('hoangnhamcntt180001@gmail.com', '1', '2014-05-11 16:59:33', '2014-05-11 16:59:33');
INSERT INTO newsletter VALUES ('hoangnhamcntt180001@gmail.com', '1', '2014-05-11 17:01:18', '2014-05-11 17:01:18');
INSERT INTO newsletter VALUES ('hoangnhamcntt80001@gmail.com', '1', '2014-05-11 17:04:22', '2014-05-11 17:04:22');
INSERT INTO newsletter VALUES ('hoangnham0001@gmail.vn', '1', '2014-05-19 14:07:37', '2014-05-19 14:07:37');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `total_product` int(11) NOT NULL,
  `total_amount` int(100) NOT NULL,
  `status` smallint(6) NOT NULL,
  `note` text COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `orders_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO orders VALUES ('4', '1', '1', '2', '215000', '1', 'Chuyển ngay nhé', null, '2014-03-08 15:26:36', '2014-04-09 15:26:36');
INSERT INTO orders VALUES ('11', '1', '0', '1', '80000', '5', '', null, '2014-03-10 16:48:14', '2014-05-18 16:48:14');
INSERT INTO orders VALUES ('12', '1', '0', '3', '345000', '5', '', null, '2014-04-10 16:49:18', '2014-05-17 16:49:18');
INSERT INTO orders VALUES ('13', '1', '0', '5', '400000', '5', '', null, '2014-04-10 17:04:59', '2014-05-17 17:04:59');
INSERT INTO orders VALUES ('14', '24', '0', '1', '130000', '5', '', null, '2014-04-12 09:20:53', '2014-05-15 09:20:53');
INSERT INTO orders VALUES ('15', '1', '0', '1', '189000', '5', '', null, '2014-04-24 16:23:30', '2014-04-25 16:23:30');
INSERT INTO orders VALUES ('16', '1', '0', '9', '2115000', '5', 'Test ngân lượng', '1', '2014-05-19 02:21:51', '2014-05-18 03:38:02');
INSERT INTO orders VALUES ('17', '1', '0', '1', '235000', '5', 'Demo', '1', '2014-05-19 07:23:45', '2014-05-19 07:23:45');
INSERT INTO orders VALUES ('18', '1', '5', '2', '378000', '1', '', null, '2014-05-21 08:06:40', '2014-05-21 08:06:40');
INSERT INTO orders VALUES ('25', '1', '0', '2', '378000', '1', '', null, '2014-05-21 08:11:42', '2014-05-22 08:07:19');
INSERT INTO orders VALUES ('26', '1', '0', '76', '7364000', '1', 'rtfjurt', null, '2014-05-22 08:21:04', '2014-05-22 08:21:04');
INSERT INTO orders VALUES ('27', '1', '1', '1', '190000', '1', '', 'jS9GG2CMnZd1okSY0Je3CjNtdelgHS8g4oKjfcOT', '2014-05-22 08:52:22', '2014-05-22 08:52:22');

-- ----------------------------
-- Table structure for `order_comment`
-- ----------------------------
DROP TABLE IF EXISTS `order_comment`;
CREATE TABLE `order_comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `order_item_comment_order_id_index` (`order_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of order_comment
-- ----------------------------
INSERT INTO order_comment VALUES ('1', '3', '1', 'dfhgjdhf', '1', '2014-03-30 09:43:37', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('2', '3', '2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum turpis, commodo nec molestie sed, sagittis quis tortor. Donec eu felis et ante tempor malesuada ut ut eros. Donec a diam id mauris eleifend eleifend pretium sed libero. Integer a leo nunc.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit.\r\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.', '1', '2014-03-30 09:43:33', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('3', '1', '1', 'ssssssssssssss', '1', '2014-03-14 15:18:28', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('4', '1', '1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum turpis, commodo nec molestie sed, sagittis quis tortor. Donec eu felis et ante tempor malesuada ut ut eros. Donec a diam id mauris eleifend eleifend pretium sed libero. Integer a leo nunc.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit.\r\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.', '1', '2014-03-14 15:19:13', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('5', '1', '1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum turpis, commodo nec molestie sed, sagittis quis tortor. Donec eu felis et ante tempor malesuada ut ut eros. Donec a diam id mauris eleifend eleifend pretium sed libero. Integer a leo nunc.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit.\r\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.', '1', '2014-03-14 15:19:53', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('6', '1', '1', '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;', '1', '2014-03-14 15:20:26', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('7', '1', '1', '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;', '1', '2014-03-14 15:21:35', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('8', '1', '1', '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;', '1', '2014-03-14 15:21:43', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('9', '1', '1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum turpis, commodo nec molestie sed, sagittis quis tortor. Donec eu felis et ante tempor malesuada ut ut eros. Donec a diam id mauris eleifend eleifend pretium sed libero. Integer a leo nunc.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit.\r\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.', '1', '2014-03-14 15:22:25', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('10', '1', '1', ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ', '1', '2014-03-14 15:23:55', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('11', '1', '1', '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;', '1', '2014-03-14 15:24:16', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('12', '1', '1', ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ', '1', '2014-03-14 15:24:24', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('13', '1', '1', ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ', '1', '2014-03-14 15:25:06', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('14', '1', '1', ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ', '1', '2014-03-14 15:25:15', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('15', '3', '1', '<strong>Đang xử lý</strong>', '2', '2014-03-14 17:14:07', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('16', '3', '1', '<strong>Chưa xử lý</strong>', '2', '2014-03-14 17:14:14', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('17', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Đang xử lý</i>', '2', '2014-03-14 17:19:07', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('18', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Đang xử lý</i>', '2', '2014-03-14 17:20:29', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('19', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Bị huỷ</i>', '2', '2014-03-14 17:22:09', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('20', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Đang xử lý</i>', '2', '2014-03-14 17:27:33', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('21', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Chờ thanh toán</i>', '1', '2014-03-14 17:30:41', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('22', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Chưa xử lý</i>', '1', '2014-03-14 17:31:03', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('23', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Đang xử lý</i>', '1', '2014-03-14 17:31:49', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('24', '3', '1', 'Thay đổi trạng thái đơn hàng: <i>Hàng lỗi</i>', '1', '2014-03-14 17:33:56', '2014-04-11 20:13:27');
INSERT INTO order_comment VALUES ('25', '1', '1', 'sdsdsd', '1', '2014-03-15 21:10:19', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('26', '2', '1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum turpis, commodo nec molestie sed, sagittis quis tortor. Donec eu felis et ante tempor malesuada ut ut eros. Donec a diam id mauris eleifend eleifend pretium sed libero. Integer a leo nunc.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.\r\n\r\nIn non ipsum et arcu scelerisque tempus. Integer suscipit pharetra purus ac blandit.\r\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et venenatis mauris. Cras sit amet felis erat. Morbi at neque est. Sed feugiat volutpat vestibulum. Aliquam semper commodo tincidunt. Fusce mattis dictum suscipit. Etiam luctus libero eu sapien lacinia adipiscing. Ut at facilisis erat.', '1', '2014-10-27 16:50:20', '2014-04-08 16:14:09');
INSERT INTO order_comment VALUES ('27', '1', '1', 'f', '1', '2014-03-28 00:36:52', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('28', '1', '1', 'Thay đổi trạng thái đơn hàng: <i>Đang xử lý</i>', '1', '2014-03-28 00:37:27', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('29', '1', '1', 'Thay đổi trạng thái đơn hàng: <i>2 - Chưa xử lý</i>', '1', '2014-03-28 00:39:13', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('30', '1', '1', 'Thay đổi trạng thái đơn hàng: <i>Chưa xử lý - Đang xử lý</i>', '1', '2014-03-28 00:39:57', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('31', '1', '1', 'Thay đổi trạng thái đơn hàng: <i>Đang xử lý => Chờ thanh toán</i>', '1', '2014-03-28 00:40:37', '2014-04-11 08:21:33');
INSERT INTO order_comment VALUES ('32', '2', '1', 'sfsddddddddddddd<div>sdf</div><div>sd</div><div>sdf</div>', '1', '2014-04-04 16:22:39', '2014-04-08 16:14:09');
INSERT INTO order_comment VALUES ('33', '2', '1', 'BNM,.', '1', '2014-04-08 03:20:28', '2014-04-08 16:14:09');
INSERT INTO order_comment VALUES ('34', '16', '1', 'Thay đổi trạng thái đơn hàng: <i>Đã thanh toán => Hàng lỗi</i>', '1', '2014-05-19 03:37:06', '2014-05-19 03:38:04');
INSERT INTO order_comment VALUES ('35', '16', '1', 'Thay đổi trạng thái đơn hàng: <i>Chờ thanh toán => Đã thanh toán</i>', '1', '2014-05-19 03:37:46', '2014-05-19 03:38:04');
INSERT INTO order_comment VALUES ('36', '16', '1', 'Thay đổi trạng thái đơn hàng: <i>Đã thanh toán => Giao dịch thành công</i>', '1', '2014-05-19 03:38:02', '2014-05-19 03:38:04');

-- ----------------------------
-- Table structure for `order_item`
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `order_id` int(11) NOT NULL,
  `quantity` smallint(6) NOT NULL,
  `price` int(11) NOT NULL,
  `category_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `attributes` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `order_item_product_id_index` (`product_id`),
  KEY `order_item_order_id_index` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of order_item
-- ----------------------------
INSERT INTO order_item VALUES ('1', '533fc494968384201e000029', '3', '9', '788888', '', '', '2014-04-10 19:26:33', '2014-04-11 19:26:39');
INSERT INTO order_item VALUES ('2', '533ee28d9683848413000029', '3', '8', '9999', '', '', '2014-04-09 19:26:50', '2014-04-10 19:26:56');
INSERT INTO order_item VALUES ('3', '533fc494968384201e000029', '11', '1', '80000', '|5|', '', '2014-04-10 16:48:14', '2014-04-10 16:48:14');
INSERT INTO order_item VALUES ('4', '533ee3779683845811000029', '12', '1', '125000', '|3|', '', '2014-04-10 16:49:18', '2014-04-10 16:49:18');
INSERT INTO order_item VALUES ('5', '533fbcf09683844c18000029', '12', '1', '85000', '|5|', '', '2014-04-10 16:49:18', '2014-04-10 16:49:18');
INSERT INTO order_item VALUES ('6', '533ee28d9683848413000029', '12', '1', '135000', '|0|', '', '2014-04-10 16:49:18', '2014-04-10 16:49:18');
INSERT INTO order_item VALUES ('7', '533fc494968384201e000029', '13', '5', '80000', '|5|', '', '2014-04-10 17:04:59', '2014-04-10 17:04:59');
INSERT INTO order_item VALUES ('8', '5347a1d2968384601800002a', '14', '1', '130000', '|7|', '', '2014-04-12 09:20:53', '2014-04-12 09:20:53');
INSERT INTO order_item VALUES ('9', '534845f8968384781800002e', '15', '1', '189000', '|0|', '', '2014-04-24 16:23:30', '2014-04-24 16:23:30');
INSERT INTO order_item VALUES ('10', '5348439e968384840e00002b', '16', '9', '235000', '|8|', '', '2014-05-19 02:21:51', '2014-05-19 02:21:51');
INSERT INTO order_item VALUES ('11', '5348439e968384840e00002b', '17', '1', '235000', '|8|', '', '2014-05-19 07:23:46', '2014-05-19 07:23:46');
INSERT INTO order_item VALUES ('12', '534845f8968384781800002e', '18', '2', '189000', '|2|', '', '2014-05-21 08:06:40', '2014-05-21 08:06:40');
INSERT INTO order_item VALUES ('13', '534845f8968384781800002e', '25', '2', '189000', '|2|', 'Size: MColor: Đỏ', '2014-05-21 08:11:42', '2014-05-21 08:11:42');
INSERT INTO order_item VALUES ('14', '534799249683846018000029', '26', '70', '89000', '|7|', '', '2014-05-22 08:21:04', '2014-05-22 08:21:04');
INSERT INTO order_item VALUES ('15', '534845f8968384781800002e', '26', '5', '189000', '|2|', '', '2014-05-22 08:21:04', '2014-05-22 08:21:04');
INSERT INTO order_item VALUES ('16', '534845f8968384781800002e', '26', '1', '189000', '|2|', 'Size: L Màu: Đỏ', '2014-05-22 08:21:04', '2014-05-22 08:21:04');
INSERT INTO order_item VALUES ('17', '537d2ea1968384480c000031', '27', '1', '190000', '|12|', '', '2014-05-22 08:52:22', '2014-05-22 08:52:22');

-- ----------------------------
-- Table structure for `permissions`
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO permissions VALUES ('1', 'management_customer', 'Quản lý khách hàng', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('2', 'management_order', 'Quản lý hoá đơn', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('3', 'management_product', 'Quản lý sản phẩm', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('4', 'management_category', 'Quản lý danh mục', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('5', 'management_attribute', 'Quản lý thuộc tính', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('6', 'management_attribute_group', 'Quản lý nhóm thuộc tính', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('7', 'management_contact', 'Quản lý liên hệ', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('8', 'management_statistic', 'Quản lý thống kê', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('9', 'management_user', 'Quản lý thành viên', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('10', 'management_permissions', 'Phân quyền', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('11', 'management_setting', 'Quản lý thông tin website', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('12', 'management_banner', 'Quản lý banner', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('13', 'management_slide', 'Quản lý slide', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO permissions VALUES ('14', 'management_article', 'Quản lý bài viết', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for `permission_role`
-- ----------------------------
DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `permission_role_permission_id_foreign` (`permission_id`),
  KEY `permission_role_role_id_foreign` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of permission_role
-- ----------------------------
INSERT INTO permission_role VALUES ('1', '3', '2');
INSERT INTO permission_role VALUES ('2', '4', '2');
INSERT INTO permission_role VALUES ('32', '1', '1');
INSERT INTO permission_role VALUES ('33', '3', '1');
INSERT INTO permission_role VALUES ('34', '4', '1');
INSERT INTO permission_role VALUES ('35', '6', '1');
INSERT INTO permission_role VALUES ('36', '7', '1');
INSERT INTO permission_role VALUES ('37', '8', '1');
INSERT INTO permission_role VALUES ('38', '9', '1');
INSERT INTO permission_role VALUES ('39', '10', '1');
INSERT INTO permission_role VALUES ('40', '2', '3');
INSERT INTO permission_role VALUES ('41', '2', '1');
INSERT INTO permission_role VALUES ('42', '5', '1');
INSERT INTO permission_role VALUES ('43', '11', '1');
INSERT INTO permission_role VALUES ('44', '12', '1');
INSERT INTO permission_role VALUES ('45', '13', '1');
INSERT INTO permission_role VALUES ('46', '14', '1');
INSERT INTO permission_role VALUES ('47', '4', '4');
INSERT INTO permission_role VALUES ('48', '1', '5');

-- ----------------------------
-- Table structure for `provinces`
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of provinces
-- ----------------------------
INSERT INTO provinces VALUES ('3', 'TP.HCM', '2');
INSERT INTO provinces VALUES ('2', 'Hà Nội', '1');
INSERT INTO provinces VALUES ('10', 'Yên Bái', '3');
INSERT INTO provinces VALUES ('11', 'Vĩnh Phúc', '4');
INSERT INTO provinces VALUES ('12', 'Vĩnh Long', '5');
INSERT INTO provinces VALUES ('13', 'Tuyên Quang', '6');
INSERT INTO provinces VALUES ('14', 'Trà Vinh', '7');
INSERT INTO provinces VALUES ('15', 'Tiền Giang', '8');
INSERT INTO provinces VALUES ('16', 'Thừa Thiên Huế', '9');
INSERT INTO provinces VALUES ('17', 'Thanh Hóa', '10');
INSERT INTO provinces VALUES ('18', 'Thái Nguyên', '11');
INSERT INTO provinces VALUES ('19', 'Thái Bình', '12');
INSERT INTO provinces VALUES ('21', 'Tây Ninh', '13');
INSERT INTO provinces VALUES ('22', 'Sơn La', '14');
INSERT INTO provinces VALUES ('23', 'Sóc Trăng', '15');
INSERT INTO provinces VALUES ('24', 'Quảng Trị', '16');
INSERT INTO provinces VALUES ('25', 'Quảng Ninh', '17');
INSERT INTO provinces VALUES ('26', 'Quảng Ngãi', '18');
INSERT INTO provinces VALUES ('27', 'Quảng Nam', '19');
INSERT INTO provinces VALUES ('28', 'Quảng Bình', '20');
INSERT INTO provinces VALUES ('29', 'Phú Yên', '21');
INSERT INTO provinces VALUES ('30', 'Phú Thọ', '22');
INSERT INTO provinces VALUES ('31', 'Ninh Thuận', '23');
INSERT INTO provinces VALUES ('32', 'Ninh Bình', '24');
INSERT INTO provinces VALUES ('33', 'Nghệ An', '25');
INSERT INTO provinces VALUES ('34', 'Nam Định', '26');
INSERT INTO provinces VALUES ('35', 'Long An', '27');
INSERT INTO provinces VALUES ('36', 'Lào Cai', '28');
INSERT INTO provinces VALUES ('37', 'Lạng Sơn', '29');
INSERT INTO provinces VALUES ('38', 'Lâm Đồng', '30');
INSERT INTO provinces VALUES ('39', 'Lai Châu', '31');
INSERT INTO provinces VALUES ('40', 'Kon Tum', '32');
INSERT INTO provinces VALUES ('41', 'Kiên Giang', '33');
INSERT INTO provinces VALUES ('42', 'Khánh Hòa', '34');
INSERT INTO provinces VALUES ('43', 'Hưng Yên', '35');
INSERT INTO provinces VALUES ('44', 'Hòa Bình', '36');
INSERT INTO provinces VALUES ('45', 'Hậu Giang', '37');
INSERT INTO provinces VALUES ('46', 'Hải Dương', '38');
INSERT INTO provinces VALUES ('47', 'Hà Tĩnh', '39');
INSERT INTO provinces VALUES ('49', 'Hà Nam ', '40');
INSERT INTO provinces VALUES ('50', 'Hà Giang', '41');
INSERT INTO provinces VALUES ('51', 'Gia Lai', '42');
INSERT INTO provinces VALUES ('52', 'Đồng Tháp', '43');
INSERT INTO provinces VALUES ('53', 'Đồng Nai', '44');
INSERT INTO provinces VALUES ('54', 'Điện Biên', '45');
INSERT INTO provinces VALUES ('55', 'Đắk Nông', '46');
INSERT INTO provinces VALUES ('56', 'Đắk Lắk', '47');
INSERT INTO provinces VALUES ('57', 'Cao Bằng', '48');
INSERT INTO provinces VALUES ('58', 'Cà Mau', '49');
INSERT INTO provinces VALUES ('59', 'Bình Thuận', '50');
INSERT INTO provinces VALUES ('60', 'Bình Phước', '51');
INSERT INTO provinces VALUES ('61', 'Bình Dương', '52');
INSERT INTO provinces VALUES ('62', 'Bình Định', '53');
INSERT INTO provinces VALUES ('63', 'Bến Tre', '54');
INSERT INTO provinces VALUES ('64', 'Bắc Ninh', '55');
INSERT INTO provinces VALUES ('65', 'Bạc Liêu', '56');
INSERT INTO provinces VALUES ('66', 'Bắc Kạn', '57');
INSERT INTO provinces VALUES ('67', 'Bắc Giang', '58');
INSERT INTO provinces VALUES ('68', 'Bà Rịa - Vũng Tàu', '59');
INSERT INTO provinces VALUES ('69', 'An Giang', '60');
INSERT INTO provinces VALUES ('70', 'Hải Phòng', '61');
INSERT INTO provinces VALUES ('71', 'Đà Nẵng', '62');
INSERT INTO provinces VALUES ('72', 'Cần Thơ', '63');

-- ----------------------------
-- Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO roles VALUES ('1', 'Administrator', '2014-03-27 10:36:51', '2014-03-27 10:36:51');
INSERT INTO roles VALUES ('2', 'Quản lý sản phẩm', '2014-04-07 13:47:26', '2014-04-07 13:47:26');
INSERT INTO roles VALUES ('3', 'Quản lý đơn hàng', '2014-04-12 05:36:13', '2014-04-12 05:36:13');
INSERT INTO roles VALUES ('4', 'Quản lý danh mục', '2014-04-12 09:10:14', '2014-04-12 09:10:14');
INSERT INTO roles VALUES ('5', 'Quản lý khách hàng', '2014-04-12 09:11:21', '2014-04-12 09:11:21');

-- ----------------------------
-- Table structure for `setting`
-- ----------------------------
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting` (
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of setting
-- ----------------------------
INSERT INTO setting VALUES ('name', 'Fashion & Style');
INSERT INTO setting VALUES ('address', 'Hà Nội - Việt Nam');
INSERT INTO setting VALUES ('email', 'hoangnhamcntt@gmail.com.');
INSERT INTO setting VALUES ('map_link', 'https://www.google.com/maps/place/AiTi+Aptech/@20.9876403,105.8399211,17z/data=!4m2!3m1!1s0x0:0xa70e17d1680d0bd0');
INSERT INTO setting VALUES ('facebook', 'https://www.facebook.com/hoangnhamcntt');
INSERT INTO setting VALUES ('meta_title', 'Shop thời trang Fashion & Style');
INSERT INTO setting VALUES ('meta_description', 'Shop thời trang Fashion & Style');
INSERT INTO setting VALUES ('meta_keyword', 'Shop thời trang Fashion & Style');
INSERT INTO setting VALUES ('text_logo', 'Fashion & Style');
INSERT INTO setting VALUES ('phone', '04.133.1151');

-- ----------------------------
-- Table structure for `slide`
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO slide VALUES ('11', 'public/images/slide/532c163be8d84.jpg', '', '', '1', '0', '2014-03-21 17:36:43', '2014-05-21 01:02:38');
INSERT INTO slide VALUES ('12', 'public/images/slide/532c16459e779.jpg', '', '', '1', '0', '2014-03-21 17:36:53', '2014-05-21 01:02:47');
INSERT INTO slide VALUES ('13', 'public/images/slide/532c165216ffe.jpg', '', '', '1', '0', '2014-03-21 17:37:06', '2014-05-21 01:02:56');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `full_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `gender` smallint(6) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `active` smallint(6) NOT NULL,
  `status` smallint(6) NOT NULL,
  `group` smallint(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO users VALUES ('1', 'admin', '$2y$10$u1hbR16HLtTXcEIrXeB4h.telUtiPp4FNjuoqjAoK1JPHpZrPsH6m', 'hoangnhamcntt@gmail.com', 'Hoàng Văn Nhâm', '1', null, '1', '1', '7', '2014-04-01 05:18:47', '2014-04-11 03:09:47');
INSERT INTO users VALUES ('2', 'hoangnham02', '$2y$10$BDTlYQ9E11LqtC1TNuqyn.2jR5JymDqt.KE7BB/2UK2oT7M8Wuku6', 'hoangnhamcntt1@gmail.com', 'Hoàng Nhâm', null, null, '1', '1', '7', '2014-02-17 12:23:44', '2014-03-27 15:22:29');
INSERT INTO users VALUES ('3', 'hoangnham03', '$2y$10$58IX8mr/DvK9Zjjn/5qrYejdEY2btYK.g.0VBhgh6bOpFFec/Ia8e', 'hoangnhamcntt01@gmail.com.vn', 'Hoàng Nhâm.', null, null, '1', '1', '0', '2014-02-17 12:25:39', '2014-03-27 15:25:47');
INSERT INTO users VALUES ('4', 'hoangnham04', '$2y$10$E7dQFYZjiO.zsS5t5SCBYOjLzxdT3qKGAJ9zGBdcfj2yF1VbWPhtm', 'hoangnhamcntt@gmail.coms', 'Hoàng Văn Nhâm', null, null, '1', '1', '0', '2014-02-23 09:49:09', '2014-03-27 15:25:37');
INSERT INTO users VALUES ('6', 'hoangnham05', '$2y$10$Y4kYQP8XfyJFKcygLfJPk.IPvb8Nckz6YX47bWcjApUK8uWkcs8eq', 'hoangnhamcntt@gmail.comds', 'Hoàng Nhâm', null, null, '1', '1', '0', '0000-00-00 00:00:00', '2014-03-27 17:53:11');
INSERT INTO users VALUES ('8', 'test', '$2y$10$Y4kYQP8XfyJFKcygLfJPk.IPvb8Nckz6YX47bWcjApUK8uWkcs8eq', 'hoangnhamcntt@gmail.comn', 'Test User', null, null, '1', '1', '0', '0000-00-00 00:00:00', '2014-04-11 12:27:44');
INSERT INTO users VALUES ('13', 'Zizaco', '$2y$10$Y4kYQP8XfyJFKcygLfJPk.IPvb8Nckz6YX47bWcjApUK8uWkcs8eq', 'hoangnham0001@mail.vn', 'HN', null, null, '1', '1', '4', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO users VALUES ('14', 'admin2', '$2y$10$r66LOBmdWPWlk0J4K83.P..x40.eUaLBrgxj8mgILvgYfl0pjE0PS', 'phuongthanhnguyen692@g2mail.com', 'Nguyen Phuong Thanh', null, null, '1', '1', '4', '2014-03-25 20:18:23', '2014-04-12 06:13:28');
INSERT INTO users VALUES ('15', 'admin3', '$2y$10$u1hbR16HLtTXcEIrXeB4h.telUtiPp4FNjuoqjAoK1JPHpZrPsH6m', 'phuongthanhnguyen692@gmail.co2m', 'Nguyen Phuong Thanh', null, null, '1', '1', '4', '2014-03-25 20:18:23', '2014-04-12 09:11:46');
INSERT INTO users VALUES ('17', 'user_test', '$2y$10$apZpqXVl0ySsUHxtigNSiumsTQMeAfXu6JFyxCxGtb0sS4ONq3Fce', 'hoangnham01@mail.vn', 'Hoàng Nhâm', null, null, '1', '0', '0', '2014-03-27 16:23:58', '2014-03-27 16:23:58');
INSERT INTO users VALUES ('18', 'user_test1', '$2y$10$/RPm79DMPfxStC7XuMqVf.OcEiNRBTSQ9ggQUcF4dXZDs1koJJCs6', 'hoangnham01@mail.vnn', 'Hoàng Nhâm', null, null, '1', '1', '0', '2014-03-27 16:24:29', '2014-03-27 16:24:29');
INSERT INTO users VALUES ('19', 'user_test11', '$2y$10$6Mw1SKMQh7eFXSDklRZ1Nu4HhnL.4vPaPf2RZD2fva/7qYuCrYhC2', 'hoangnham01@mail.vnnv', 'Hoàng Nhâm', null, null, '1', '1', '0', '2014-03-27 16:24:58', '2014-03-27 16:24:58');
INSERT INTO users VALUES ('20', 'user_test100', '$2y$10$aI/HLUK1S1MW8dat1QXeYe7FezJagozTulIX5tIm8rN4TY1vCxrki', 'hoangnham01@mail.vm', 'Hoàng Nhâm', null, null, '1', '1', '0', '2014-03-27 16:25:35', '2014-03-27 16:25:35');
INSERT INTO users VALUES ('21', 'hoangnham01', '$2y$10$pQTcsZebpZwGCbm11XMlZu/GIxgQ5LHMz//2fFCC46hoYqPyW5Vw6', 'hoangnhamcntt@gmail.com.vn', 'Hoàng Văn Nhâm', null, null, '0', '1', '0', '2014-04-06 18:28:55', '2014-04-06 18:28:55');
INSERT INTO users VALUES ('22', 'user_test2', '$2y$10$79C6/MSeqi4V2d2faeXDSu4PRfBaSH/jJWEipEe51xSAsGnhDyYo.', 'user_test@vnpt.vn', 'Hoàng Nhâm', null, null, '0', '1', '0', '2014-04-06 18:30:34', '2014-04-06 18:30:34');
INSERT INTO users VALUES ('23', 'hoangnham002', '$2y$10$S.7Rx9b4GkaXWaKkvrySIupedBcN9a153f.mnSQxIUnseNYK3tgXu', 'hoangnham@gmail.com.vn', 'Hoàng Văn Nhâm', null, null, '1', '1', '0', '2014-04-12 05:06:44', '2014-04-12 06:42:51');
INSERT INTO users VALUES ('24', 'us12345', '$2y$10$51sbq8OzzE2dQytAx.nXVexiebuBwbWqM20anC2a/OjfuTy7l.rQe', 'hoangnhamcnt1t@gmail.com', 'Hoàng Nhâm', null, null, '0', '1', '0', '2014-04-12 09:16:32', '2014-04-12 09:16:32');
INSERT INTO users VALUES ('27', 'hoanglao', '$2y$10$KFOOLqC0bOE20QrFIEKDnOeHP3JUll95WWw6MTHpTHmOqv9MHKRre', 'hoangtu9x@gmail.com', 'Hoàng Nhâm', '1', null, '1', '1', '1', '2014-05-07 21:24:51', '2014-05-07 21:24:51');
INSERT INTO users VALUES ('33', 'hoangnhamazds', '$2y$10$3XhG.Mk4WDasxJCd5ITZneK509XhgLjMyGj7UHFEgQ5jRH/eFzZ4m', 'hoangnhamcntt80001@gmail.com', 'hoangnhamazds1', null, null, '0', '1', '0', '2014-05-11 17:04:21', '2014-05-11 17:04:21');
INSERT INTO users VALUES ('34', 'hoangnham0001', '$2y$10$wQvlE9SMv7D4/ttXPculx.VPdKl3O6VTppjax7J2o0hogQKE/liSi', 'hoangnham0001@gmail.vn', 'Hoàng Nhâm', null, null, '0', '1', '0', '2014-05-19 14:07:37', '2014-05-19 14:07:37');

-- ----------------------------
-- Table structure for `user_address`
-- ----------------------------
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `districts_id` int(11) NOT NULL,
  `full_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `user_address_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_address
-- ----------------------------
INSERT INTO user_address VALUES ('1', '1', '119', 'Hoàng Nhâm', 'Nam Dư - Lĩnh Nam', '012345678', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO user_address VALUES ('2', '1', '119', 'Hoàng Văn Nhâm', 'Minh Khai', '34567890', '0', '0000-00-00 00:00:00', '2014-04-12 03:29:00');
INSERT INTO user_address VALUES ('3', '1', '119', 'Hoàng Nhâm', 'Nam Dư', '34567890', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO user_address VALUES ('4', '2', '119', 'HN', 'Lĩnh Nam', '4567890', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO user_address VALUES ('5', '1', '664', 'Hoàng Văn Nhâm', 'Thôn Sau Chiền - Bắc Lý ', '01638572284', '1', '2014-04-12 04:05:18', '2014-04-12 04:05:18');
INSERT INTO user_address VALUES ('6', '1', '119', 'Hoàng Văn Nhâm', '110 Nam Dư', '04.133.115', '1', '2014-04-12 04:07:41', '2014-04-12 04:07:41');
INSERT INTO user_address VALUES ('7', '1', '119', 'Hoàng Nhâm', 'Hoàng Mai', '04.133.1151', '0', '2014-04-12 06:33:00', '2014-05-19 01:53:51');
INSERT INTO user_address VALUES ('8', '1', '857', 'Hoàng Nhâm', 'Thôn Sau Chiền - Bắc Lý - Hiệp Hoà Bắc Giang', '841638572284', '0', '2014-04-12 07:14:33', '2014-04-12 07:14:39');
INSERT INTO user_address VALUES ('9', '1', '126', 'Hoàng Nhâm', 'Hà Nội - Việt Nam', '841638572284', '1', '2014-05-22 08:51:45', '2014-05-22 08:51:45');

-- ----------------------------
-- Table structure for `user_meta`
-- ----------------------------
DROP TABLE IF EXISTS `user_meta`;
CREATE TABLE `user_meta` (
  `user_id` int(11) NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  KEY `user_meta_key_index` (`key`),
  KEY `user_meta_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_meta
-- ----------------------------
INSERT INTO user_meta VALUES ('27', 'facebook', '100001739816007');
INSERT INTO user_meta VALUES ('1', 'facebook', '100004791701119');
