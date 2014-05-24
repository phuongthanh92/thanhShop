
/** attribute indexes **/
db.getCollection("attribute").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** attribute indexes **/
db.getCollection("attribute").ensureIndex({
  "code": NumberInt(1)
},[
  
]);

/** attribute_group indexes **/
db.getCollection("attribute_group").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** attribute_group indexes **/
db.getCollection("attribute_group").ensureIndex({
  "group_name": NumberInt(1)
},[
  
]);

/** attribute_group indexes **/
db.getCollection("attribute_group").ensureIndex({
  "group_attributes": NumberInt(1)
},[
  
]);

/** cart indexes **/
db.getCollection("cart").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** cart indexes **/
db.getCollection("cart").ensureIndex({
  "user_id": NumberInt(1)
},[
  
]);

/** cart indexes **/
db.getCollection("cart").ensureIndex({
  "product_id": NumberInt(1)
},[
  
]);

/** cart indexes **/
db.getCollection("cart").ensureIndex({
  "session_id": NumberInt(1)
},[
  
]);

/** favorite indexes **/
db.getCollection("favorite").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** favorite indexes **/
db.getCollection("favorite").ensureIndex({
  "product_id": NumberInt(1)
},[
  
]);

/** products indexes **/
db.getCollection("products").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** products indexes **/
db.getCollection("products").ensureIndex({
  "slug": NumberInt(1)
},[
  
]);

/** attribute records **/
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000029"),
  "code": "name",
  "label": "Tên sản phẩm",
  "type": "text",
  "unique": NumberInt(0),
  "require": NumberInt(1),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300002a"),
  "code": "code",
  "label": "Mã sản phẩm",
  "type": "text",
  "unique": NumberInt(1),
  "require": NumberInt(1),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300002b"),
  "code": "slug",
  "label": "Đường dẫn thân thiện",
  "type": "text",
  "unique": NumberInt(0),
  "require": NumberInt(1),
  "validate": "slug",
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300002c"),
  "code": "status",
  "label": "Trạng thái",
  "type": "select",
  "data": {
    "1": "Hiển thị",
    "0": "Ẩn"
  },
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300002d"),
  "code": "short_description",
  "label": "Mô tả ngắn gọn",
  "type": "textarea",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300002e"),
  "code": "description",
  "label": "Mô tả",
  "type": "textarea",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300002f"),
  "code": "color",
  "label": "Màu sắc",
  "type": "multiselect",
  "data": {
    "red": "Đỏ",
    "white": "Trắng",
    "yellow": "Vàng",
    "black": "Đen",
    "green": "Xanh lá cây",
    "blue": "Xanh da trời",
    "orange": "Cam",
    "violet": "Tím",
    "orther": "Khác"
  },
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000030"),
  "code": "size",
  "label": "Size",
  "type": "text",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000031"),
  "code": "hot",
  "label": "Hot",
  "type": "select",
  "data": [
    "Không",
    "Có"
  ],
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "general"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000032"),
  "code": "image",
  "label": "Hình ảnh",
  "type": "file",
  "unique": NumberInt(0),
  "require": NumberInt(1),
  "validate": "image",
  "system": NumberInt(1),
  "group": "image"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000033"),
  "code": "price",
  "label": "Giá",
  "type": "price",
  "unique": NumberInt(0),
  "require": NumberInt(1),
  "validate": "price",
  "system": NumberInt(1),
  "group": "price"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000034"),
  "code": "group_price",
  "label": "Nhóm giá",
  "type": "group",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": "price",
  "system": NumberInt(1),
  "group": "group"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000035"),
  "code": "special_price",
  "label": "Giá đặc biệt",
  "type": "price",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": "price",
  "system": NumberInt(1),
  "group": "price"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000036"),
  "code": "special_from_date",
  "group": "price",
  "label": "Giá đặc biệt từ ngày",
  "require": NumberInt(0),
  "system": NumberInt(1),
  "type": "date",
  "unique": NumberInt(0),
  "validate": "date"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000037"),
  "code": "special_to_date",
  "label": "Giá đặc biệt đến ngày",
  "type": "date",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": "date",
  "system": NumberInt(1),
  "group": "price"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000038"),
  "code": "meta_title",
  "label": "Meta Title",
  "type": "text",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "seo"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f813000039"),
  "code": "meta_keyword",
  "label": "Meta Keywords",
  "type": "textarea",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "seo"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300003a"),
  "code": "meta_description",
  "label": "Meta Description",
  "type": "textarea",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "seo"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5323c725968384f81300003b"),
  "code": "tag",
  "label": "Tag",
  "type": "text",
  "unique": NumberInt(0),
  "require": NumberInt(0),
  "validate": NumberInt(0),
  "system": NumberInt(1),
  "group": "seo"
});
db.getCollection("attribute").insert({
  "_id": ObjectId("532cfd77968384f01300002c"),
  "code": "test",
  "label": "Media Title",
  "type": "text",
  "require": "1",
  "validate": "0",
  "updated_at": ISODate("2014-03-22T03:03:19.0Z"),
  "created_at": ISODate("2014-03-22T03:03:19.0Z")
});
db.getCollection("attribute").insert({
  "_id": ObjectId("5348a4b69683847410000029"),
  "code": "mau_sac",
  "label": "Màu sắc",
  "type": "text",
  "require": "1",
  "validate": "0",
  "updated_at": ISODate("2014-04-12T02:28:06.0Z"),
  "created_at": ISODate("2014-04-12T02:28:06.0Z")
});

/** attribute_group records **/
db.getCollection("attribute_group").insert({
  "_id": ObjectId("530f6f5b968384680c000029"),
  "created_at": ISODate("2014-02-27T17:01:15.0Z"),
  "group_attributes": [
    "name",
    "code",
    "slug",
    "status",
    "short_description",
    "description",
    "color",
    "size",
    "hot",
    "image",
    "price",
    "group_price",
    "special_price",
    "special_from_date",
    "special_to_date",
    "meta_title",
    "meta_keyword",
    "meta_description",
    "tag"
  ],
  "group_name": "Mặc định",
  "updated_at": ISODate("2014-03-07T23:08:11.0Z")
});

/** cart records **/
db.getCollection("cart").insert({
  "_id": ObjectId("5329128a968384680a00002c"),
  "session_id": "f5fa4267b5e84f61a21b1aaa4d72e4281adde3b7",
  "user_id": NumberInt(-1),
  "product_id": "53282c78968384640a000029",
  "quantity": NumberInt(17),
  "updated_at": ISODate("2014-03-19T08:35:41.0Z"),
  "created_at": ISODate("2014-03-19T03:44:10.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53291294968384680a00002d"),
  "session_id": "f5fa4267b5e84f61a21b1aaa4d72e4281adde3b7",
  "user_id": NumberInt(-1),
  "product_id": "53282dc8968384640a00002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-19T03:44:20.0Z"),
  "created_at": ISODate("2014-03-19T03:44:20.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5329129d968384100700002b"),
  "session_id": "f5fa4267b5e84f61a21b1aaa4d72e4281adde3b7",
  "user_id": NumberInt(-1),
  "product_id": "531bd4e5968384a01800002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-19T03:44:29.0Z"),
  "created_at": ISODate("2014-03-19T03:44:29.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("532944e7968384000a000029"),
  "session_id": "3fa751a20c68e82e1d01cd2aa7892d44618ebfe4",
  "user_id": NumberInt(-1),
  "product_id": "531cf0d9968384b018000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-19T07:19:03.0Z"),
  "created_at": ISODate("2014-03-19T07:19:03.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("532957db968384480e000029"),
  "session_id": "9d03475aa0506de4632c7dec1410d90d8134e490",
  "user_id": NumberInt(-1),
  "product_id": "53282c78968384640a000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-19T09:45:06.0Z"),
  "created_at": ISODate("2014-03-19T08:39:55.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394d47968384a425000029"),
  "product_id": "532c09e59683849409000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:11:03.0Z"),
  "created_at": ISODate("2014-03-31T11:11:03.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394d7c9683846c24000029"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:11:56.0Z"),
  "created_at": ISODate("2014-03-31T11:11:56.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394dad9683846c2400002a"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:12:45.0Z"),
  "created_at": ISODate("2014-03-31T11:12:45.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394dba9683846c2400002b"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:12:58.0Z"),
  "created_at": ISODate("2014-03-31T11:12:58.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394dc39683846c2400002c"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:13:07.0Z"),
  "created_at": ISODate("2014-03-31T11:13:07.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394ddd9683846c2400002d"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:13:33.0Z"),
  "created_at": ISODate("2014-03-31T11:13:33.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394e31968384841d000029"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:14:57.0Z"),
  "created_at": ISODate("2014-03-31T11:14:57.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53394e44968384841d00002a"),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-03-31T11:15:16.0Z"),
  "created_at": ISODate("2014-03-31T11:15:16.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53397235968384dc21000029"),
  "session_id": "1e0f5e3e22e4f8b05ca0524a6e220c27838db5c2",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(4),
  "updated_at": ISODate("2014-03-31T14:54:16.0Z"),
  "created_at": ISODate("2014-03-31T13:48:37.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5339767f968384440f000029"),
  "session_id": "1e0f5e3e22e4f8b05ca0524a6e220c27838db5c2",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(11),
  "updated_at": ISODate("2014-03-31T14:07:50.0Z"),
  "created_at": ISODate("2014-03-31T14:06:55.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53397683968384440f00002a"),
  "session_id": "1e0f5e3e22e4f8b05ca0524a6e220c27838db5c2",
  "user_id": NumberInt(-1),
  "product_id": "532e45e7968384f01300002d",
  "quantity": NumberInt(5),
  "updated_at": ISODate("2014-03-31T14:09:07.0Z"),
  "created_at": ISODate("2014-03-31T14:06:59.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53397b1a968384440f00002b"),
  "session_id": "1e0f5e3e22e4f8b05ca0524a6e220c27838db5c2",
  "user_id": NumberInt(-1),
  "product_id": "532c09e59683849409000029",
  "quantity": NumberInt(5),
  "updated_at": ISODate("2014-03-31T15:20:22.0Z"),
  "created_at": ISODate("2014-03-31T14:26:34.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533abdb1968384dc2100002a"),
  "session_id": "bb08942983f15c5fcae1e4ef3f36a5eef5b935ef",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(3),
  "updated_at": ISODate("2014-04-01T15:15:43.0Z"),
  "created_at": ISODate("2014-04-01T13:22:57.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533abdcf968384440f00002c"),
  "session_id": "bb08942983f15c5fcae1e4ef3f36a5eef5b935ef",
  "user_id": NumberInt(-1),
  "product_id": "532c09e59683849409000029",
  "quantity": NumberInt(5),
  "updated_at": ISODate("2014-04-01T15:38:15.0Z"),
  "created_at": ISODate("2014-04-01T13:23:27.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533acffa968384841d00002c"),
  "session_id": "bb08942983f15c5fcae1e4ef3f36a5eef5b935ef",
  "user_id": NumberInt(-1),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(5),
  "updated_at": ISODate("2014-04-01T15:38:22.0Z"),
  "created_at": ISODate("2014-04-01T14:40:58.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ad003968384841d00002d"),
  "session_id": "bb08942983f15c5fcae1e4ef3f36a5eef5b935ef",
  "user_id": NumberInt(-1),
  "product_id": "532e45e7968384f01300002d",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T14:41:07.0Z"),
  "created_at": ISODate("2014-04-01T14:41:07.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ad02b968384dc2100002b"),
  "session_id": "bb08942983f15c5fcae1e4ef3f36a5eef5b935ef",
  "user_id": NumberInt(-1),
  "product_id": "532e45db9683849814000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T14:41:47.0Z"),
  "created_at": ISODate("2014-04-01T14:41:47.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533addaa968384c80400002a"),
  "session_id": "4be1e17be82f1a9e897caac93147e6e2948a8567",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:39:22.0Z"),
  "created_at": ISODate("2014-04-01T15:39:22.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533addaf968384c80400002b"),
  "session_id": "4be1e17be82f1a9e897caac93147e6e2948a8567",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:39:27.0Z"),
  "created_at": ISODate("2014-04-01T15:39:27.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533addb4968384c80400002c"),
  "session_id": "4be1e17be82f1a9e897caac93147e6e2948a8567",
  "user_id": NumberInt(-1),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:39:32.0Z"),
  "created_at": ISODate("2014-04-01T15:39:32.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533addb7968384c80400002d"),
  "session_id": "4be1e17be82f1a9e897caac93147e6e2948a8567",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:39:35.0Z"),
  "created_at": ISODate("2014-04-01T15:39:35.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae005968384c80400002e"),
  "session_id": "48529d3b434c57b60f20543a37a2f4955d467f75",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:49:25.0Z"),
  "created_at": ISODate("2014-04-01T15:49:25.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae007968384c80400002f"),
  "session_id": "48529d3b434c57b60f20543a37a2f4955d467f75",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:49:27.0Z"),
  "created_at": ISODate("2014-04-01T15:49:27.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae00a968384c804000030"),
  "session_id": "48529d3b434c57b60f20543a37a2f4955d467f75",
  "user_id": NumberInt(-1),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:49:30.0Z"),
  "created_at": ISODate("2014-04-01T15:49:30.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae061968384841d00002e"),
  "session_id": "9f42b144a780c63f066606d0151c02c14827dbf8",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:50:57.0Z"),
  "created_at": ISODate("2014-04-01T15:50:57.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae064968384841d00002f"),
  "session_id": "9f42b144a780c63f066606d0151c02c14827dbf8",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:51:00.0Z"),
  "created_at": ISODate("2014-04-01T15:51:00.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae067968384841d000030"),
  "session_id": "9f42b144a780c63f066606d0151c02c14827dbf8",
  "user_id": NumberInt(-1),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:51:03.0Z"),
  "created_at": ISODate("2014-04-01T15:51:03.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae0cf968384841d000031"),
  "session_id": "1d9c54c1a7ee08dc4fb581f6e154b02dd4655e6b",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:52:47.0Z"),
  "created_at": ISODate("2014-04-01T15:52:47.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae0d3968384841d000032"),
  "session_id": "1d9c54c1a7ee08dc4fb581f6e154b02dd4655e6b",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:52:51.0Z"),
  "created_at": ISODate("2014-04-01T15:52:51.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae0d7968384841d000033"),
  "session_id": "1d9c54c1a7ee08dc4fb581f6e154b02dd4655e6b",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:52:55.0Z"),
  "created_at": ISODate("2014-04-01T15:52:55.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae394968384500e000029"),
  "session_id": "9ba0a4f5ce32e4fe29fc08ffa049ee0a706ac217",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:04:36.0Z"),
  "created_at": ISODate("2014-04-01T16:04:36.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae397968384500e00002a"),
  "session_id": "9ba0a4f5ce32e4fe29fc08ffa049ee0a706ac217",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:04:39.0Z"),
  "created_at": ISODate("2014-04-01T16:04:39.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae3c69683841411000029"),
  "session_id": "531d12e7ad46cf3ac4c2c906a44014617850b467",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:05:26.0Z"),
  "created_at": ISODate("2014-04-01T16:05:26.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae0e0968384841d000034"),
  "session_id": "1d9c54c1a7ee08dc4fb581f6e154b02dd4655e6b",
  "user_id": NumberInt(-1),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:53:04.0Z"),
  "created_at": ISODate("2014-04-01T15:53:04.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae174968384300800002a"),
  "session_id": "c3f1baf2152dfd617680b2c8593b1d49945211ad",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:55:32.0Z"),
  "created_at": ISODate("2014-04-01T15:55:32.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae1a6968384841d000035"),
  "session_id": "f169cbdfca8e049d1238b45c3cb6021ceb6a5f40",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T15:56:22.0Z"),
  "created_at": ISODate("2014-04-01T15:56:22.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae607968384141100002a"),
  "session_id": "8dd5c0cca4af3efb2ca567a6f43de808505d6c82",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:15:03.0Z"),
  "created_at": ISODate("2014-04-01T16:15:03.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae67d968384841d000036"),
  "session_id": "28ff7aff1340241983d210062902eb59a11ac934",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:17:01.0Z"),
  "created_at": ISODate("2014-04-01T16:17:01.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae682968384841d000037"),
  "session_id": "28ff7aff1340241983d210062902eb59a11ac934",
  "user_id": NumberInt(-1),
  "product_id": "533590ec968384c009000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:17:06.0Z"),
  "created_at": ISODate("2014-04-01T16:17:06.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae687968384841d000038"),
  "session_id": "28ff7aff1340241983d210062902eb59a11ac934",
  "user_id": NumberInt(-1),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:17:11.0Z"),
  "created_at": ISODate("2014-04-01T16:17:11.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae691968384841d000039"),
  "session_id": "28ff7aff1340241983d210062902eb59a11ac934",
  "user_id": NumberInt(-1),
  "product_id": "532e49c5968384981400002b",
  "quantity": NumberInt(4),
  "updated_at": ISODate("2014-04-01T16:17:24.0Z"),
  "created_at": ISODate("2014-04-01T16:17:21.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae69c968384841d00003a"),
  "session_id": "28ff7aff1340241983d210062902eb59a11ac934",
  "user_id": NumberInt(-1),
  "product_id": "532e45e7968384f01300002d",
  "quantity": NumberInt(2),
  "updated_at": ISODate("2014-04-01T16:17:33.0Z"),
  "created_at": ISODate("2014-04-01T16:17:32.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("533ae86c968384c804000031"),
  "session_id": "28ff7aff1340241983d210062902eb59a11ac934",
  "user_id": NumberInt(-1),
  "product_id": "5335912c9683849c0500002a",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-01T16:25:16.0Z"),
  "created_at": ISODate("2014-04-01T16:25:16.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("534187b69683840815000029"),
  "session_id": "1edd5624d685d2d0a9a095c67f15eb805ecb821e",
  "user_id": NumberInt(-1),
  "product_id": "533fc494968384201e000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-06T16:58:30.0Z"),
  "created_at": ISODate("2014-04-06T16:58:30.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53419eb5968384600c000029"),
  "session_id": "2536a7626278981ba2297b9f418b262f0e4896d1",
  "user_id": NumberInt(-1),
  "product_id": "533fc494968384201e000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-06T18:36:37.0Z"),
  "created_at": ISODate("2014-04-06T18:36:37.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5341aa7c968384280f00002a"),
  "session_id": "91a339f7342ff5b59872f470a377d34a22ef6bcf",
  "user_id": NumberInt(-1),
  "product_id": "533fc494968384201e000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-06T19:26:52.0Z"),
  "created_at": ISODate("2014-04-06T19:26:52.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5341ab0a968384280f00002b"),
  "session_id": "3760232deeefcfcc1b70993d6239b61df456d1df",
  "user_id": NumberInt(-1),
  "product_id": "533ee3779683845811000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-06T19:29:14.0Z"),
  "created_at": ISODate("2014-04-06T19:29:14.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5341ab0e968384280f00002c"),
  "session_id": "3760232deeefcfcc1b70993d6239b61df456d1df",
  "user_id": NumberInt(-1),
  "product_id": "533fbcf09683844c18000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-06T19:29:18.0Z"),
  "created_at": ISODate("2014-04-06T19:29:18.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5341ab59968384281d00002c"),
  "session_id": "2de57407a5ef8cfbfc0012dbbb892694494674d3",
  "user_id": NumberInt(-1),
  "product_id": "533ee28d9683848413000029",
  "quantity": NumberInt(1),
  "updated_at": ISODate("2014-04-06T19:30:33.0Z"),
  "created_at": ISODate("2014-04-06T19:30:33.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5341c3169683844c1800002b"),
  "session_id": "138c5691cf8e6a310594635c7c5f883985195ad2",
  "user_id": NumberInt(-1),
  "product_id": "533fc494968384201e000029",
  "quantity": NumberInt(3),
  "updated_at": ISODate("2014-04-06T21:11:50.0Z"),
  "created_at": ISODate("2014-04-06T21:11:50.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("536b21ac968384a80f000029"),
  "session_id": "46f267469277f03d7378fb1bddb78077b13291dc",
  "user_id": NumberInt(-1),
  "product_id": "533590a29683849c05000029",
  "quantity": NumberInt(1),
  "note": "",
  "updated_at": ISODate("2014-05-08T06:18:20.0Z"),
  "created_at": ISODate("2014-05-08T06:18:20.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("536b21b3968384a80f00002a"),
  "session_id": "46f267469277f03d7378fb1bddb78077b13291dc",
  "user_id": NumberInt(-1),
  "product_id": "5347a1d2968384601800002a",
  "quantity": NumberInt(1),
  "note": "",
  "updated_at": ISODate("2014-05-08T06:18:27.0Z"),
  "created_at": ISODate("2014-05-08T06:18:27.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("536b21c8968384a80f00002b"),
  "session_id": "46f267469277f03d7378fb1bddb78077b13291dc",
  "user_id": NumberInt(-1),
  "product_id": "5348439e968384840e00002b",
  "quantity": NumberInt(1),
  "note": "",
  "updated_at": ISODate("2014-05-08T06:18:48.0Z"),
  "created_at": ISODate("2014-05-08T06:18:48.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("536cf38a968384600e000029"),
  "session_id": "e089678f8c8e3f919a4339814753fd04230512b7",
  "user_id": NumberInt(-1),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "note": "",
  "updated_at": ISODate("2014-05-09T15:37:00.0Z"),
  "created_at": ISODate("2014-05-09T15:26:02.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("536f37ac968384e40a000029"),
  "session_id": "06c5899db2a66c3cf57c6b6f576c78078323af45",
  "user_id": NumberInt(-1),
  "product_id": "534845f8968384781800002e",
  "quantity": NumberInt(1),
  "note": "",
  "updated_at": ISODate("2014-05-11T08:41:16.0Z"),
  "created_at": ISODate("2014-05-11T08:41:16.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("536fb21a9683842012000029"),
  "session_id": "4937ce78bd528caa12071746cf6365d4fc9065df",
  "user_id": NumberInt(33),
  "product_id": "53359023968384040a000029",
  "quantity": NumberInt(1),
  "note": "",
  "updated_at": ISODate("2014-05-11T17:23:38.0Z"),
  "created_at": ISODate("2014-05-11T17:23:38.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("537754db9683847c11000029"),
  "user_id": NumberInt(-1),
  "session_id": "186f88556b335a419db76f21151ec20cedf91a17",
  "product_id": "534845f8968384781800002e",
  "quantity": NumberInt(1),
  "option": {
    "size": null,
    "color": null,
    "qty": NumberInt(1)
  },
  "updated_at": ISODate("2014-05-17T12:23:55.0Z"),
  "created_at": ISODate("2014-05-17T12:23:55.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("537754e09683847c1100002a"),
  "user_id": NumberInt(-1),
  "session_id": "186f88556b335a419db76f21151ec20cedf91a17",
  "product_id": "5348439e968384840e00002b",
  "quantity": NumberInt(1),
  "option": {
    "size": null,
    "color": null,
    "qty": NumberInt(1)
  },
  "updated_at": ISODate("2014-05-17T12:24:00.0Z"),
  "created_at": ISODate("2014-05-17T12:24:00.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("537754eb968384ec05000029"),
  "user_id": NumberInt(-1),
  "session_id": "186f88556b335a419db76f21151ec20cedf91a17",
  "product_id": "534845f8968384781800002e",
  "quantity": NumberInt(1),
  "option": {
    "size": null,
    "color": null,
    "qty": NumberInt(1)
  },
  "updated_at": ISODate("2014-05-17T12:24:11.0Z"),
  "created_at": ISODate("2014-05-17T12:24:11.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("53785298968384ec0500002b"),
  "user_id": NumberInt(-1),
  "session_id": "57c0fb738e5c314a6e7d82f988ccaf74f353c211",
  "product_id": "5348439e968384840e00002b",
  "quantity": "9",
  "key": "P5348439e968384840e00002bSC",
  "size": null,
  "color": null,
  "updated_at": ISODate("2014-05-18T18:46:19.0Z"),
  "created_at": ISODate("2014-05-18T06:26:32.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5379ad81968384e01200002a"),
  "user_id": NumberInt(-1),
  "session_id": "5a9cc3ba58b899ba4d3f6a0bc1147c19838fe4d7",
  "key": "P534845f8968384781800002eSMCred",
  "product_id": "534845f8968384781800002e",
  "quantity": NumberInt(2),
  "size": "M",
  "color": "red",
  "updated_at": ISODate("2014-05-19T07:06:41.0Z"),
  "created_at": ISODate("2014-05-19T07:06:41.0Z")
});
db.getCollection("cart").insert({
  "_id": ObjectId("5379add2968384740d000029"),
  "user_id": NumberInt(34),
  "session_id": "1dbb42ace2ab383faf3f96988cf9d2f352ba5f1f",
  "key": "P534845f8968384781800002eSMCred",
  "product_id": "534845f8968384781800002e",
  "quantity": NumberInt(2),
  "size": "M",
  "color": "red",
  "updated_at": ISODate("2014-05-19T07:08:02.0Z"),
  "created_at": ISODate("2014-05-19T07:08:02.0Z")
});

/** favorite records **/
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e20f9683840413000029"),
  "user_id": NumberInt(1),
  "product_id": "533fc494968384201e000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:25:19.0Z"),
  "created_at": ISODate("2014-04-10T18:25:19.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e210968384041300002a"),
  "user_id": NumberInt(1),
  "product_id": "533fbcf09683844c18000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:25:20.0Z"),
  "created_at": ISODate("2014-04-10T18:25:20.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e212968384041300002b"),
  "user_id": NumberInt(1),
  "product_id": "533ee3779683845811000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:25:22.0Z"),
  "created_at": ISODate("2014-04-10T18:25:22.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e214968384041300002c"),
  "user_id": NumberInt(1),
  "product_id": "533ee28d9683848413000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:25:24.0Z"),
  "created_at": ISODate("2014-04-10T18:25:24.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e219968384041300002d"),
  "user_id": NumberInt(1),
  "product_id": "533edfc9968384b80c000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:25:29.0Z"),
  "created_at": ISODate("2014-04-10T18:25:29.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e221968384041300002e"),
  "user_id": NumberInt(1),
  "product_id": "533ee0e3968384f413000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:25:37.0Z"),
  "created_at": ISODate("2014-04-10T18:25:37.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e2399683847c1600002b"),
  "user_id": NumberInt(1),
  "product_id": "533edd3a968384a01100002a",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:26:01.0Z"),
  "created_at": ISODate("2014-04-10T18:26:01.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5346e2399683846c14000029"),
  "user_id": NumberInt(1),
  "product_id": "533edb9b968384a011000029",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-04-10T18:26:01.0Z"),
  "created_at": ISODate("2014-04-10T18:26:01.0Z")
});
db.getCollection("favorite").insert({
  "_id": ObjectId("5379ab90968384301a00002a"),
  "user_id": NumberInt(1),
  "product_id": "534845f8968384781800002e",
  "status": NumberInt(1),
  "updated_at": ISODate("2014-05-19T06:58:24.0Z"),
  "created_at": ISODate("2014-05-19T06:58:24.0Z")
});

/** products records **/
db.getCollection("products").insert({
  "_id": ObjectId("53359023968384040a000029"),
  "category": [
    NumberInt(8)
  ],
  "code": "CR28797",
  "created_at": ISODate("2014-03-28T15:07:15.0Z"),
  "description": "<div id=\"fucking\"><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "0",
  "image": [
    "public\/images\/products\/5335900dd009a.jpg",
    "public\/images\/products\/5335900e63206.jpg",
    "public\/images\/products\/5335900ec73c1.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Bộ quần áo nữ xinh xắn chào thu",
  "price": NumberInt(950000),
  "quantity": NumberInt(116),
  "short_description": "",
  "size": "",
  "slug": "bo-quan-ao-nu-xinh-xan-chao-thu",
  "special_from_date": "",
  "special_price": NumberInt(0),
  "special_to_date": "",
  "status": "1",
  "stock": "1",
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533590a29683849c05000029"),
  "category": [
    NumberInt(5)
  ],
  "code": "CR14683",
  "created_at": ISODate("2014-03-28T15:09:22.0Z"),
  "description": "<div id=\"fucking\"><p><br data-mce-bogus=\"1\"><\/p><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "0",
  "image": [
    "public\/images\/products\/533590923db2e.jpg",
    "public\/images\/products\/53359092b95ef.jpg",
    "public\/images\/products\/5335909342151.jpg",
    "public\/images\/products\/53359094221f3.jpg"
  ],
  "meta_description": "<p><br data-mce-bogus=\"1\"><\/p>",
  "meta_keyword": "<p><br data-mce-bogus=\"1\"><\/p>",
  "meta_title": "",
  "name": "Áo thun cổ tim House Bill",
  "price": NumberInt(850000),
  "quantity": NumberInt(16),
  "short_description": "<p><br data-mce-bogus=\"1\"><\/p>",
  "size": "",
  "slug": "ao-thun-co-tim-house-bill",
  "special_from_date": "",
  "special_price": NumberInt(0),
  "special_to_date": "",
  "status": "1",
  "stock": "1",
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533590ec968384c009000029"),
  "category": [
    NumberInt(5)
  ],
  "code": "CR47296",
  "created_at": ISODate("2014-03-28T15:10:36.0Z"),
  "description": "<div id=\"fucking\"><p><br><\/p><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "0",
  "image": [
    "public\/images\/products\/533590d129efd.jpg",
    "public\/images\/products\/533590d416a08.jpg",
    "public\/images\/products\/533590d48aede.jpg"
  ],
  "meta_description": "<p><br><\/p>",
  "meta_keyword": "<p><br><\/p>",
  "meta_title": "",
  "name": "Áo nam cổ tim túi ngực",
  "price": NumberInt(107000),
  "quantity": NumberInt(16),
  "short_description": "<p><br><\/p>",
  "size": "",
  "slug": "ao-nam-co-tim-tui-nguc",
  "special_from_date": "",
  "special_price": NumberInt(0),
  "special_to_date": "",
  "status": "1",
  "stock": "1",
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533edb9b968384a011000029"),
  "name": "Quần bò nữ hàng hiệu",
  "code": "QBN001",
  "slug": "quan-bo-nu-hang-hieu",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/533edb9b974b8.jpg",
    "public\/images\/products\/533edb9b98b93.jpg",
    "public\/images\/products\/533edb9b99f4a.jpg"
  ],
  "price": NumberInt(269000),
  "special_price": NumberInt(0),
  "special_from_date": false,
  "special_to_date": false,
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": "20",
  "category": [
    NumberInt(6),
    NumberInt(8)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-04T16:19:39.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533edd3a968384a01100002a"),
  "name": "Quần bò nữ thời trang",
  "code": "QBN002",
  "slug": "quan-bo-nu-thoi-trang",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/533edd3a92aef.jpg",
    "public\/images\/products\/533edd3a9365d.jpg",
    "public\/images\/products\/533edd3a944bf.jpg"
  ],
  "price": NumberInt(99000),
  "special_price": NumberInt(0),
  "special_from_date": false,
  "special_to_date": false,
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": "30",
  "category": [
    NumberInt(6),
    NumberInt(8)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-04T16:26:34.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533ee0e3968384f413000029"),
  "category": [
    NumberInt(0)
  ],
  "code": "PK101",
  "created_at": ISODate("2014-04-04T16:42:11.0Z"),
  "description": "<div id=\"fucking\"><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "0",
  "image": [
    "public\/images\/products\/533ee0e316b0f.jpg",
    "public\/images\/products\/533ee0e3185c4.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Đồng hồ nam Rosra đẳng cấp sang trọng",
  "price": NumberInt(150000),
  "quantity": "10",
  "short_description": "",
  "size": "",
  "slug": "dong-ho-nam-rosra-dang-cap-sang-trong",
  "special_from_date": false,
  "special_price": NumberInt(0),
  "special_to_date": false,
  "status": "1",
  "stock": NumberInt(1),
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533fc494968384201e000029"),
  "category": [
    NumberInt(5)
  ],
  "code": "CR_5401",
  "created_at": ISODate("2014-04-05T08:53:40.0Z"),
  "description": "<div id=\"fucking\"><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "0",
  "image": [
    "public\/images\/products\/533fc4940855a.jpg",
    "public\/images\/products\/533fc49409ce3.jpg",
    "public\/images\/products\/533fc4940af3d.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Áo phông nam thời trang phong cách",
  "price": NumberInt(100000),
  "quantity": NumberInt(35),
  "related_products": [
    "533fbcf09683844c18000029"
  ],
  "short_description": "",
  "size": "",
  "slug": "ao-phong-nam-thoi-trang-phong-cach",
  "special_from_date": NumberInt(1396690007),
  "special_price": NumberInt(80000),
  "special_to_date": NumberInt(1398417975),
  "status": "1",
  "stock": NumberInt(1),
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("53478ae19683846818000029"),
  "name": "Quần bò nam cao cấp - Hàng xuất khẩu",
  "code": "CR_34838",
  "slug": "quan-bo-nam-cao-cap-hang-xuat-khau",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/53478ae14119c.jpg",
    "public\/images\/products\/53478ae142426.jpg"
  ],
  "price": NumberInt(140000),
  "special_price": NumberInt(0),
  "special_from_date": "",
  "special_to_date": "",
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(0),
  "category": [
    NumberInt(0)
  ],
  "related_products": [
    "53477bd09683847018000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-11T06:25:37.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("5348439e968384840e00002b"),
  "name": "Áo đôi Hataci cao cấp",
  "code": "CR_47576",
  "slug": "ao-doi-hataci-cao-cap",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "1",
  "image": [
    "public\/images\/products\/5348439e9808e.jpg",
    "public\/images\/products\/5348439e9b8bf.jpg",
    "public\/images\/products\/5348439e9cbc4.jpg"
  ],
  "price": NumberInt(235000),
  "special_price": NumberInt(0),
  "special_from_date": NumberInt(1397244830),
  "special_to_date": NumberInt(1397244830),
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(91),
  "category": [
    NumberInt(2),
    NumberInt(5),
    NumberInt(8)
  ],
  "related_products": [
    "534799249683846018000029",
    "5347a1d2968384601800002a",
    "53359023968384040a000029",
    "533590a29683849c05000029",
    "533590ec968384c009000029",
    "533fbcf09683844c18000029",
    "533fc494968384201e000029",
    "53477bd09683847018000029",
    "53478ae19683846818000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-11T19:33:50.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("534845f8968384781800002e"),
  "category": [
    NumberInt(2)
  ],
  "code": "CR_27108",
  "color": [
    "red",
    "white",
    "orange",
    "violet"
  ],
  "created_at": ISODate("2014-04-11T19:43:52.0Z"),
  "description": "<div id=\"fucking\"><div id=\"fucking\"><p><img src=\"..\/..\/..\/public\/file-manager\/source\/1_1.jpg\" alt=\"1_1\" class=\"img-responsive\" \/><\/p> <p><strong>-Áo thể thao nam cao cấp-<\/strong><\/p> <p> <\/p> <p id=\"docs-internal-guid-4412cf4b-b138-73da-fd6a-c40c3478274c\" dir=\"ltr\">Hầu như chàng trai nào cũng yêu thích thể thao. Không chỉ thể hiện được sức mạnh của đàn ông,thể thao còn khiến anh ấy vui thích với sự thử thách. Trang phục thể thao từ đó cũng trở nên rất quan trọng với chàng.<\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"><img src=\"..\/..\/..\/public\/file-manager\/source\/2_1.jpg\" alt=\"2_1\" class=\"img-responsive\" \/><\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"><strong>-Kiểu dáng trẻ trung-<\/strong><\/p> <p> <\/p> <p dir=\"ltr\">Điều quan trọng nhất khi lựa chọn trang phục thể thao là sự thoải mái, dễ vận động và chất vải thấm mồ hôi tốt. Nhưng không chỉ vậy, trang phục thể thao cũng cần hợp thời trang và tạo được phong cách cho bạn. Cực rẻ sẽ đem đến cho bạn Áo thể thao nam cao cấp 01 được thiết kế dành riêng cho hoạt động thể thao năng động.<\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"><img src=\"..\/..\/..\/public\/file-manager\/source\/3_1.jpg\" alt=\"3_1\" class=\"img-responsive\" \/><\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"> <\/p> <p dir=\"ltr\"><strong>-Dáng suông đơn giản, phù hợp với nhiều dáng người-<\/strong><\/p> <p dir=\"ltr\">                           <\/p> <p>Với thiết kế trẻ trung, form áo chuẩn, chiếc áo phù hợp với mọi vóc dáng cơ thể nam giới. Đặc điểm chính của chiếc áo thể thao này chính là tạo ra cho nam giới sự mạnh mẽ, nam tính và năng động trước con mắt của những người xung quanh. Với chất liệu cotton co giãn và thấm hút mồ hôi, chiếc áo sẽ mang lại sự thoải mái, năng động cho chàng.<\/p> <p> <\/p> <p><img src=\"..\/..\/..\/public\/file-manager\/source\/4_1.jpg\" alt=\"4_1\" class=\"img-responsive\" \/><\/p> <p> <\/p> <p><strong>-Chất liệu cotton thấm hút mồ hôi-<\/strong><\/p> <p> <\/p> <p><img src=\"..\/..\/..\/public\/file-manager\/source\/5_1.jpg\" alt=\"5_1\" class=\"img-responsive\" \/><\/p> <p> <\/p> <p><strong>-Mang đến cảm giác thoải mái cho chàng-<\/strong><\/p> <p> <\/p> <p><img src=\"..\/..\/..\/public\/file-manager\/source\/6_1.jpg\" alt=\"6_1\" class=\"img-responsive\" \/>   <\/p> <p> <\/p> <p><strong>-Mạnh mẽ-<\/strong><\/p> <p> <\/p> <p><img src=\"..\/..\/..\/public\/file-manager\/source\/7.jpg\" alt=\"7\" class=\"img-responsive\" \/><\/p> <p> <\/p> <p><strong>-Năng động-<\/strong><\/p> <p> <\/p> <p><img src=\"..\/..\/..\/public\/file-manager\/source\/8.jpg\" alt=\"8\" class=\"img-responsive\" \/><\/p> <p> <\/p> <p><strong>-Phù hợp với nhiều hoàn cảnh như đi học, đi làm, chơi thể thao...-<\/strong><\/p><div><\/div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "group_price": "",
  "hot": "1",
  "image": [
    "public\/images\/products\/534845f82ae51.jpg",
    "public\/images\/products\/534845f82bd5e.jpg",
    "public\/images\/products\/534845f82d009.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Áo thể thao nam cao cấp 01",
  "price": NumberInt(189000),
  "quantity": NumberInt(20),
  "related_products": [
    "533ee28d9683848413000029",
    "533ee3779683845811000029"
  ],
  "short_description": "<p><span style=\"font-family: Calibri; font-size: 15px; line-height: 22.5px; text-align: justify;\">Hầu như chàng trai nào cũng yêu thích thể thao. Không chỉ thể hiện được sức mạnh của đàn ông,thể thao còn khiến anh ấy vui thích với sự thử thách. Trang phục thể thao từ đó cũng trở nên rất quan trọng với chàng.<\/span><\/p>",
  "size": "M,L",
  "slug": "ao-the-thao-nam-cao-cap-01",
  "special_from_date": "",
  "special_price": NumberInt(0),
  "special_to_date": "",
  "status": "1",
  "stock": NumberInt(1),
  "tag": "",
  "updated_at": ISODate("2014-05-21T15:03:05.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537ad6d7968384240f000029"),
  "name": "Áo sơ mi dài tay chất đẹp cho nam-HL",
  "code": "CR_55805",
  "slug": "ao-so-mi-dai-tay-chat-dep-cho-nam-hl",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<div align=\"justify\"><br \/>- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL thiết kế &ocirc;m body gọn g&agrave;ng, trẻ trung.<br \/>- &Aacute;o c&oacute; m&agrave;u xanh nh&atilde; nhặn, rất ph&ugrave; hợp cho c&aacute;c bạn nam y&ecirc;u th&iacute;ch phong c&aacute;ch thời trang sơ mi lịch l&atilde;m<br \/>- Kiểu d&aacute;ng &aacute;o d&agrave;i tay, dễ kết hợp trong nhiều ho&agrave;n cảnh kh&aacute;c nhau.<br \/>- Chất liệu vải đẹp, thấm h&uacute;t mồ h&ocirc;i rất tốt cho người mặc lu&ocirc;n thoải m&aacute;i suốt cả ng&agrave;y d&agrave;i.<br \/>- Ph&ugrave; hợp với mọi v&oacute;c d&aacute;ng cơ thể.<\/div>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div id=\"fucking\"><div class=\"hightlight\">  <h2>Đặc điểm nổi bật - &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL<\/h2>  <div class=\"hightlight_content\">  <div align=\"justify\"><br \/>- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL thiết kế &ocirc;m body gọn g&agrave;ng, trẻ trung.<br \/>- &Aacute;o c&oacute; m&agrave;u xanh nh&atilde; nhặn, rất ph&ugrave; hợp cho c&aacute;c bạn nam y&ecirc;u th&iacute;ch phong c&aacute;ch thời trang sơ mi lịch l&atilde;m<br \/>- Kiểu d&aacute;ng &aacute;o d&agrave;i tay, dễ kết hợp trong nhiều ho&agrave;n cảnh kh&aacute;c nhau.<br \/>- Chất liệu vải đẹp, thấm h&uacute;t mồ h&ocirc;i rất tốt cho người mặc lu&ocirc;n thoải m&aacute;i suốt cả ng&agrave;y d&agrave;i.<br \/>- Ph&ugrave; hợp với mọi v&oacute;c d&aacute;ng cơ thể.<br \/><br \/><strong>Th&ocirc;ng tin sản phẩm:&nbsp;<\/strong><br \/>- Xuất xứ: Việt Nam<br \/>- Chất liệu: vải th&ocirc; m&aacute;t<br \/>- K&iacute;ch cỡ: S, M, L<br \/>- M&agrave;u sắc: xanh nhạt<\/div>  <\/div>  <\/div>  <div class=\"description\">  <h2>Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL<\/h2>  <p>&nbsp;<\/p>  <p>&Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam l&agrave; một trong những mẫu sơ mi mới nhất của l&agrave;ng thời trang h&egrave; 2014 m&agrave; Cucre.vn giới thiệu tới c&aacute;c đấng m&agrave;y r&acirc;u ng&agrave;y h&ocirc;m nay. &Aacute;o được thiết kế trẻ trung, hiện đại, &ocirc;m trọn body người mặc gi&uacute;p nổi bật phong c&aacute;ch lịch l&atilde;m đầy c&aacute; t&iacute;nh.<\/p>  <p>&nbsp;<\/p>  <p><img src=\"..\/..\/..\/public\/file-manager\/source\/537c9996aca21.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p>&nbsp;<\/p>  <p><strong>- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam HL trẻ trung -<\/strong><\/p>  <p>&nbsp;<\/p>  <p><img src=\"..\/..\/..\/public\/file-manager\/source\/537c99972737f.jpg\" alt=\"\" class=\"img-responsive\" \/>&nbsp;<\/p>  <p>&nbsp;<\/p>  <p><strong>- &Aacute;o thiết kế cổ đức trẻ trung, hiện đại -<\/strong><\/p>  <p>&nbsp;<\/p>  <p><img src=\"..\/..\/..\/public\/file-manager\/source\/537c999781795.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p>&nbsp;<\/p>  <p><strong>- Chất vải đẹp, mềm mại, thấm h&uacute;t mồ h&ocirc;i rất tốt -<\/strong><\/p>  <p>&nbsp;<\/p>  <p><img src=\"..\/..\/..\/public\/file-manager\/source\/537c9997df02c.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p>&nbsp;<\/p>  <p><strong>- T&ocirc;n v&oacute;c d&aacute;ng người mặc -<\/strong><\/p>  <p>&nbsp;<\/p>  <p><img src=\"..\/..\/..\/public\/file-manager\/source\/537c999853a95.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p>&nbsp;<\/p>  <p><strong>- Dễ mặc theo nhiều phong c&aacute;ch kh&aacute;c nhau -<\/strong><\/p>  <p>&nbsp;<\/p>  <p>&nbsp;<\/p>  <p>&nbsp;<\/p>  <p>&nbsp;<\/p>  <p><img src=\"..\/..\/..\/public\/file-manager\/source\/537c9998cf983.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p>&nbsp;<\/p>  <p id=\"docs-internal-guid-ae236b6d-0864-9f8c-aab6-c0474cea507b\" dir=\"ltr\">Với chiếc &aacute;o sơ mi d&agrave;i tay n&agrave;y bạn nam c&oacute; thể kết hợp với quần jeans, gi&agrave;y thể thao như c&aacute;ch th&ocirc;ng dụng nhất. Khi muốn m&igrave;nh biến th&agrave;nh một qu&yacute; &ocirc;ng lịch l&atilde;m, &ldquo;sơ vin&rdquo; sơ mi kẻ với quần tối m&agrave;u v&agrave; một đ&ocirc;i gi&agrave;y da cũng khiến c&aacute;c ch&agrave;ng trở n&ecirc;n nam t&iacute;nh v&agrave; lịch l&atilde;m hơn bao giờ hết.<\/p>  <\/div><div><\/div><\/div>",
  "size": "M,L,S",
  "hot": "1",
  "image": [
    "public\/images\/products\/537ad6d783987.jpg",
    "public\/images\/products\/537ad6d7893b2.jpg"
  ],
  "price": NumberInt(250000),
  "special_price": NumberInt(200000),
  "special_from_date": NumberInt(1400386519),
  "special_to_date": NumberInt(1400991319),
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(30),
  "category": [
    NumberInt(4),
    NumberInt(5),
    NumberInt(12)
  ],
  "related_products": [
    "53477bd09683847018000029",
    "5348439e968384840e00002b"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T15:03:05.0Z"),
  "created_at": ISODate("2014-05-20T04:15:19.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("5335912c9683849c0500002a"),
  "category": [
    NumberInt(3)
  ],
  "code": "CR47703",
  "created_at": ISODate("2014-03-28T15:11:40.0Z"),
  "description": "<div id=\"fucking\"><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "0",
  "image": [
    "public\/images\/products\/5335912415f17.jpg",
    "public\/images\/products\/53382bc6b92b9.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Đồng hồ nam mặt đính phá lê Baishuns hiển thị ngày",
  "price": NumberInt(145000),
  "quantity": NumberInt(5),
  "short_description": "",
  "size": "",
  "slug": "dong-ho-nam-mat-dinh-pha-le-baishuns-hien-thi-ngay",
  "special_from_date": "",
  "special_price": NumberInt(0),
  "special_to_date": "",
  "status": "1",
  "stock": "1",
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533ee28d9683848413000029"),
  "name": "Đồng hồ nam đính đá phong cách sang trọng",
  "code": "PK100",
  "slug": "dong-ho-nam-dinh-da-phong-cach-sang-trong",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/533ee28dc6e55.jpg",
    "public\/images\/products\/533ee28dc8457.jpg",
    "public\/images\/products\/533ee28dc9c66.jpg",
    "public\/images\/products\/533ee28dcb24b.jpg"
  ],
  "price": NumberInt(135000),
  "special_price": NumberInt(0),
  "special_from_date": false,
  "special_to_date": false,
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": "0",
  "category": [
    NumberInt(0)
  ],
  "related_products": [
    "533ee0e3968384f413000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-04T16:49:17.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533ee3779683845811000029"),
  "name": "Đồng hồ nam 3 mặt sang trọng",
  "code": "PK102",
  "slug": "dong-ho-nam-3-mat-sang-trong",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/533ee377811a0.jpg",
    "public\/images\/products\/533ee377824e3.jpg",
    "public\/images\/products\/533ee37783f75.jpg"
  ],
  "price": NumberInt(125000),
  "special_price": NumberInt(0),
  "special_from_date": false,
  "special_to_date": false,
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": "20",
  "category": [
    NumberInt(3)
  ],
  "related_products": [
    "533ee0e3968384f413000029",
    "533ee28d9683848413000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-04T16:53:11.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533fbcf09683844c18000029"),
  "name": "Áo phông nam thời trang hè 2014",
  "code": "CR_48622",
  "slug": "ao-phong-nam-thoi-trang-he-2014",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/533fbcf05250e.jpg",
    "public\/images\/products\/533fbcf05bd54.jpg",
    "public\/images\/products\/533fbcf05dc3b.jpg"
  ],
  "price": NumberInt(85000),
  "special_price": NumberInt(0),
  "special_from_date": false,
  "special_to_date": false,
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(20),
  "category": [
    NumberInt(5)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-05T08:21:04.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("53477bd09683847018000029"),
  "name": "Quần bò nam cao cấp M8005",
  "code": "CR_48201",
  "slug": "quan-bo-nam-cao-cap-m8005",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/53477bd0d0deb.jpg",
    "public\/images\/products\/53477bd0d1e39.jpg"
  ],
  "price": NumberInt(269000),
  "special_price": NumberInt(0),
  "special_from_date": "",
  "special_to_date": "",
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(0),
  "category": [
    NumberInt(0)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-11T05:21:20.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("5347a1d2968384601800002a"),
  "category": [
    NumberInt(0)
  ],
  "code": "CR_21662",
  "created_at": ISODate("2014-04-11T08:03:30.0Z"),
  "description": "<div id=\"fucking\"><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "hot": "1",
  "image": [
    "public\/images\/products\/5347a1d279239.jpg",
    "public\/images\/products\/5347a1d279fd2.jpg",
    "public\/images\/products\/5347a1d27ad2a.jpg",
    "public\/images\/products\/5347a1d27b9d9.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Đầm thun hoa tiết hình thoi",
  "price": NumberInt(130000),
  "quantity": NumberInt(39),
  "related_products": [
    "53359023968384040a000029",
    "533edb9b968384a011000029",
    "533edd3a968384a01100002a"
  ],
  "short_description": "",
  "size": "M,L, XL",
  "slug": "dam-thun-hoa-tiet-hinh-thoi",
  "special_price": NumberInt(0),
  "status": "1",
  "stock": NumberInt(1),
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "color": [
    "white",
    "yellow",
    "violet",
    "orther"
  ],
  "group_price": "",
  "special_from_date": "",
  "special_to_date": ""
});
db.getCollection("products").insert({
  "_id": ObjectId("534799249683846018000029"),
  "name": "Đầm thun lạnh hot girl - Shop Tom",
  "code": "CR_24531",
  "slug": "dam-thun-lanh-hot-girl-shop-tom",
  "status": "1",
  "short_description": "",
  "description": "<div id=\"fucking\"><div><\/div>",
  "size": "",
  "hot": "1",
  "image": [
    "public\/images\/products\/53479924ece9a.jpg",
    "public\/images\/products\/53479924ee0d5.jpg",
    "public\/images\/products\/53479924ef4d9.jpg",
    "public\/images\/products\/53479924f10b7.jpg",
    "public\/images\/products\/53479924f2703.jpg"
  ],
  "price": NumberInt(89000),
  "special_price": NumberInt(0),
  "meta_title": "",
  "meta_keyword": "",
  "meta_description": "",
  "tag": "",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(70),
  "category": [
    NumberInt(9),
    NumberInt(7)
  ],
  "related_products": [
    "53359023968384040a000029",
    "533edb9b968384a011000029",
    "533edd3a968384a01100002a"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T14:18:36.0Z"),
  "created_at": ISODate("2014-04-11T07:26:28.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("533edfc9968384b80c000029"),
  "category": [
    NumberInt(0)
  ],
  "code": "PK0182",
  "color": "",
  "created_at": ISODate("2014-04-04T16:37:29.0Z"),
  "description": "<div id=\"fucking\"><div><\/div>",
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "group_price": "",
  "hot": "1",
  "image": [
    "public\/images\/products\/53485e96bf7a1.jpg",
    "public\/images\/products\/53485e96c0793.jpg",
    "public\/images\/products\/53485e96c15d1.jpg"
  ],
  "meta_description": "",
  "meta_keyword": "",
  "meta_title": "",
  "name": "Giày cao gót nhung hot trend 2014",
  "price": NumberInt(280000),
  "public\/images\/products\/53485e96c15d1": {
    "jpg": [
      "public\/images\/products\/53485e96bf7a1.jpg",
      "public\/images\/products\/53485e96c0793.jpg",
      "public\/images\/products\/53485e96c15d1.jpg"
    ]
  },
  "quantity": NumberInt(20),
  "short_description": "<p>aaaaaaaaaaaaa<\/p>",
  "size": "",
  "slug": "giay-cao-got-nhung-hot-trend-2014",
  "special_from_date": "",
  "special_price": NumberInt(0),
  "special_to_date": "",
  "status": "1",
  "stock": NumberInt(1),
  "tag": "",
  "updated_at": ISODate("2014-05-21T14:18:36.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cdb6b968384480c00002d"),
  "name": "Áo phông đôi tình nhân ngộ nghĩnh (221)",
  "code": "CR_55421",
  "slug": "ao-phong-doi-tinh-nhan-ngo-nghinh-221",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o ph&ocirc;ng đ&ocirc;i t&igrave;nh nh&acirc;n ngộ nghĩnh (221)<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\"><br \/>\r\n<div align=\"justify\">- &Aacute;o ph&ocirc;ng đ&ocirc;i t&igrave;nh y&ecirc;u kiểu d&aacute;ng thời trang, minh họa tinh nghịch, trẻ trung gi&uacute;p thể hiện t&igrave;nh y&ecirc;u đ&ocirc;i lứa.<br \/>- &Aacute;o được may từ chất liệu vải cotton mềm v&agrave; m&aacute;t, th&iacute;ch hợp cho mọi hoạt động của c&aacute;c bạn trẻ.<br \/>- Nổi bật với 2 gam m&agrave;u đen, trắng rất dễ mặc.<br \/>- &Aacute;o c&oacute; thiết kế cổ tr&ograve;n, tay ngắn, thoải m&aacute;i cho mọi hoạt động m&ugrave;a h&egrave;.<br \/>- Dễ kết hợp trang phục kh&aacute;c nhau.<\/div>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o ph&ocirc;ng đ&ocirc;i t&igrave;nh nh&acirc;n ngộ nghĩnh (221)<\/h2>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Từ l&acirc;u &aacute;o đ&ocirc;i đ&atilde; trở th&agrave;nh một trong những phương tiện thể hiện th&ocirc;ng điệp y&ecirc;u thương của những bạn trẻ. V&agrave; h&egrave; về, những hoạt động của hai bạn sẽ nhiều hơn, đồng nghĩa với việc cả hai sẽ c&ugrave;ng xuất hiện b&ecirc;n nhau thường xuy&ecirc;n hơn. Vậy th&igrave; cũng đ&atilde; đến l&uacute;c bạn cần trang bị cho m&igrave;nh th&ecirc;m những chiếc &aacute;o đ&ocirc;i để cả 2 thật thoải m&aacute;i v&agrave; đồng bộ với nhau phải kh&ocirc;ng n&agrave;o?<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdb121a9fd.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u - 221 kiểu d&aacute;ng trẻ trung, tinh nghịch -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Cucre.vn xin giới thiệu tới c&aacute;c cặp đ&ocirc;i sản phẩm &Aacute;o đ&ocirc;i thời trang 221 kiểu d&aacute;ng trẻ trung, tinh nghịch, khỏe khoắn gi&uacute;p c&aacute;c bạn thể hiện th&ocirc;ng điệp y&ecirc;u thương d&agrave;nh cho một nửa của m&igrave;nh.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdb12d62b5.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Nổi bật với minh họa ngộ nghĩnh -<\/strong><\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdb13d4ba8.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Dễ phối hợp với sooc, Jeans -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp; <img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdb1455bd7.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Chất liệu 100% cotton mềm, m&aacute;t -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdb1526bda.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Nếu bạn c&ograve;n ngần ngại khi lựa chọn những chiếc &aacute;o ngo&agrave;i thị trường với gi&aacute; rất đắt cho một đ&ocirc;i &aacute;o th&igrave; tại sao bạn kh&ocirc;ng thử gh&eacute; qua c&aacute;c cửa h&agrave;ng Cucre.vn để lựa chọn cho m&igrave;nh v&agrave; người ấy chiếc &aacute;o đ&ocirc;i với gi&aacute; ưu đ&atilde;i đang chờ bạn nhỉ.<\/span><\/p>  <\/div><\/div>",
  "color": [
    "black"
  ],
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cdb116d410.jpg"
  ],
  "price": NumberInt(190000),
  "special_price": NumberInt(139000),
  "special_from_date": NumberInt(1400691563),
  "special_to_date": NumberInt(1400691563),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(19),
  "category": [
    NumberInt(1),
    NumberInt(4),
    NumberInt(6),
    NumberInt(2),
    NumberInt(5),
    NumberInt(8),
    NumberInt(9),
    NumberInt(12),
    NumberInt(7)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T16:59:23.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cbdf4968384f406000029"),
  "name": "Ví nam khâu tay da cá sấu 100% - MenBro - Bảo Hành 12 tháng",
  "code": "CR_56540",
  "slug": "vi-nam-khau-tay-da-ca-sau-100-menbro-bao-hanh-12-thang",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - V&iacute; nam kh&acirc;u tay da c&aacute; sấu 100% - MenBro - Bảo H&agrave;nh 12 th&aacute;ng<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<div align=\"justify\">- V&iacute; nam da c&aacute; sấu l&agrave; phụ kiện gi&uacute;p c&aacute;c bạn nam thể hiện được đẳng cấp ph&aacute;i mạnh, c&oacute; thể sử dụng trong nhiều ho&agrave;n cảnh kh&aacute;c nhau như dự tiệc, đi chơi... Gi&uacute;p t&ocirc;n l&ecirc;n sự sang trọng v&agrave; lịch l&atilde;m v&agrave; mạnh mẽ cho c&aacute;c đấng m&agrave;y r&acirc;u.<br \/>- V&iacute; da c&aacute; sấu nam được l&agrave;m bằng chất liệu da thật 100%.<br \/>- Thiết kế sang trọng, đẹp mắt, đường may đẹp v&agrave; chắc chắn.<br \/>- V&iacute; da được thi&ecirc;́t k&ecirc;́ nhiều ngăn, thoải m&aacute;i cho bạn chứa giấy tờ v&agrave; c&aacute;c vật dụng cần thiết.<br \/><br \/><strong>Th&ocirc;ng tin sản phẩm:<\/strong><br \/>- Xuất xứ:&nbsp; Việt Nam - Ph&acirc;n ph&ocirc;i bởi MenBro<br \/>- Chất liệu:&nbsp; da v&acirc;n c&aacute; sấu 100%<br \/>-&nbsp; K&iacute;ch thước:&nbsp; 13x10cm<br \/>- M&agrave;u sắc:&nbsp; n&acirc;u v&agrave; đen<\/div>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- V&iacute; nam kh&acirc;u tay da c&aacute; sấu 100% - MenBro - Bảo H&agrave;nh 12 th&aacute;ng<\/h2>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Những chiếc v&iacute; c&oacute; thể coi l&agrave; phụ kiện gắn b&oacute; v&agrave; kh&ocirc;ng thể thiếu đối với mỗi ch&agrave;ng trai. Mỗi người, ở mỗi tr&igrave;nh độ, tầng lớp v&agrave; nghề nghiệp kh&aacute;c nhau sẽ c&oacute; những nhu cầu kh&aacute;c nhau về chiếc v&iacute; của m&igrave;nh. Nhưng tất cả phải tựu đủ c&aacute;c yếu tố: bền, đẹp, gi&aacute; cả phải chăng v&agrave; tiện lợi khi sử dụng. H&ocirc;m nay Cucre.vn xin giới thiệu tới c&aacute;c bạn sản phẩm V&iacute; nam kh&acirc;u tay da c&aacute; sấu 100% Menbro - một chiếc v&iacute; hội tụ đủ c&aacute;c t&iacute;nh năng v&agrave; ưu điểm kể tr&ecirc;n.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdcfd4528.jpg\" alt=\"\" class=\"img-responsive\" \/>&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- V&iacute; da nam kh&acirc;u tay v&acirc;n c&aacute; sấu 100% Menbro -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp; <img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdd120e4d.jpg\" alt=\"\" class=\"img-responsive\" \/>&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Kiểu d&aacute;ng v&iacute; ngang tiện lợi, ph&ugrave; hợp cho nam giới -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdd1c07db.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Tinh tế với thiết kế c&aacute;c khe đựng thẻ tiện lợi -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdd2a19de.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Với 2 ngăn ch&iacute;nh thiết kế tinh tế, ngăn kh&oacute;a k&iacute;n đ&aacute;o -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdd32912a.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- C&oacute; 2 m&agrave;u sắc đen v&agrave; n&acirc;u cho bạn lựa chọn -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdd3933cf.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-&nbsp; Bảo h&agrave;nh: 12 th&aacute;ng với thẻ&nbsp; bảo h&agrave;nh k&egrave;m theo sản phẩm -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbdd41d098.jpg\" alt=\"\" class=\"img-responsive\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- C&oacute; hộp đựng sang trọng th&iacute;ch hợp khi tặng v&iacute; cho người bạn y&ecirc;u mến -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Kh&ocirc;ng qu&aacute; kh&oacute; để c&oacute; thể lựa chọn cho ph&aacute;i mạnh một chiếc v&iacute; m&agrave; họ ưng &yacute; phải kh&ocirc;ng c&aacute;c bạn. H&atilde;y đến với hệ thống cửa h&agrave;ng Cucre.vn để lựa chọn cho m&igrave;nh chiếc v&iacute; bạn cảm thấy ưng &yacute; nhất nh&eacute;. Tất cả đều c&oacute; mức hợp l&yacute; với nhiều ưu đ&atilde;i chỉ c&oacute; tại Cucre.vn<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p>&nbsp;<\/p>  <\/div><\/div><\/div>",
  "color": [
    "yellow",
    "black"
  ],
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cbdcf5bca8.jpg"
  ],
  "price": NumberInt(390000),
  "special_price": NumberInt(222000),
  "special_from_date": NumberInt(1400684020),
  "special_to_date": NumberInt(1400684020),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(31),
  "category": [
    NumberInt(3)
  ],
  "related_products": [
    "533ee3779683845811000029",
    "533ee28d9683848413000029",
    "533ee0e3968384f413000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T15:03:05.0Z"),
  "created_at": ISODate("2014-05-21T14:53:40.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cbf749683844c1e00002a"),
  "name": "Thắt lưng MenBro da thật 100% mặt đầu báo - Bảo Hành 12 tháng",
  "code": "CR_36024",
  "slug": "that-lung-menbro-da-that-100-mat-dau-bao-bao-hanh-12-thang",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - Thắt lưng MenBro da thật 100% mặt đầu b&aacute;o - Bảo H&agrave;nh 12 th&aacute;ng<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p id=\"docs-internal-guid-1e76ca97-50a3-0406-6b43-4e551899c1d9\" dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chỉ với 275.000đ sở hữu ngay sản phẩm Thắt lưng MenBro da thật 100% mặt đầu b&aacute;o - Bảo h&agrave;nh 12 th&aacute;ng - Tiết kiệm 50% so với gi&aacute; thị trường 550.000đ<\/span><\/p>\r\n<br \/>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Thiết kế đầu kh&oacute;a sang trọng với biểu tượng h&igrave;nh mặt b&aacute;o, kh&ocirc;ng bị lỗi mốt theo thời gian. Bền đẹp, mềm dẻo n&ecirc;n hạn chế tối đa hiện tượng bong tr&oacute;c, g&atilde;y dập.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Sản phẩm mang đến cho chủ nh&acirc;n vẻ lịch l&atilde;m, nam t&iacute;nh. Bạn sẽ tr&ocirc;ng rất s&agrave;nh điệu v&agrave; sang trọng khi sử dụng sản phẩm l&agrave;m phụ kiện cho m&igrave;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Th&iacute;ch hợp với nhiều loại quần như quần T&acirc;y, jeans, kaki, ... gi&uacute;p bạn tự tin v&agrave; c&aacute; t&iacute;nh khi xuất hiện ở c&ocirc;ng sở, dự tiệc, hay đi chơi c&ugrave;ng bạn b&egrave;.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Thắt lưng MenBro da thật 100% mặt đầu b&aacute;o - Bảo H&agrave;nh 12 th&aacute;ng<\/h2>  <p id=\"docs-internal-guid-1e76ca97-50a4-d879-a4ed-5aea186224ae\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Một chiếc thắt lưng cao cấp sẽ l&agrave; m&oacute;n qu&agrave; &yacute; nghĩa đối với c&aacute;c đấng m&agrave;y r&acirc;u, đ&acirc;y l&agrave; phụ kiện kh&ocirc;ng thể thiếu với c&aacute;c ch&agrave;ng. Với phong c&aacute;ch v&agrave; lịch l&atilde;m kh&ocirc;ng chỉ mang đến cho ph&aacute;i mạnh sự cuốn h&uacute;t ph&aacute;i đẹp m&agrave; c&ograve;n n&acirc;ng cao đẳng cấp trong c&ocirc;ng việc hay giao tiếp. Thắt lưng nam da thật Menbro m&agrave; cucre.vn giới thiệu trong deal h&ocirc;m nay cũng g&oacute;p một phần quan trọng kh&ocirc;ng nhỏ đối với cuộc sống của bạn. Sản phẩm d&acirc;y lưng nam đ&atilde; khẳng định phong c&aacute;ch thời trang s&agrave;nh điệu.<\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbf42125d4.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Thắt lưng Menbro da thật 100% cho ch&agrave;ng khẳng định phong c&aacute;ch s&agrave;nh điệu -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-1e76ca97-50a5-6c4a-c859-bbf3bcfe3f88\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Được l&agrave;m từ chất liệu da thật nguy&ecirc;n chất 100%, chiếc thắt lưng rất bền v&agrave; đẹp để bạn an t&acirc;m sử dụng, hạn chế tối đa hiện tượng bong tr&oacute;c, g&atilde;y dập theo thời gian. Thiết kế đầu kh&oacute;a sang trọng, khung kim loại chắc chắn, sẽ kh&ocirc;ng bị lỗi mốt theo thời gian.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbf42682bb.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Thiết kế đầu thắt lưng nổi bật với biểu tượng mặt da b&aacute;o -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbf42c5fad.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Sang trọng -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbf432b2ae.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1e76ca97-50a6-1c35-0862-fedc348e063e\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Sản phẩm c&oacute; khả năng chịu được lực k&eacute;o, độ đ&agrave;n hồi tốt, dẻo dai, bền m&agrave;u. Bạn c&oacute; thể kết hợp ch&uacute;ng với nhiều loại quần &aacute;o kh&aacute;c nhau như quần T&acirc;y, jean, kaki,... để tăng th&ecirc;m phần lịch l&atilde;m, sang trọng v&agrave; tự tin trong mọi hoạt động giao tiếp.<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cbf4386a66.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-1e76ca97-50a6-4989-e694-47ee933545ea\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Thắt lưng thiết kế sang trọng, đẹp mắt đang được đ&ocirc;ng đảo ph&aacute;i mạnh ưa chuộng. Sản phẩm &aacute;p dụng chất liệu da b&ograve; thật cao cấp nguy&ecirc;n chất 100%, sử dụng c&ocirc;ng nghệ hiện đại tạo ra những đường v&acirc;n c&aacute; sấu ho&agrave;n hảo, ch&iacute;nh x&aacute;c tuyệt đối. H&atilde;y đặt MUA ngay bạn nh&eacute;.<\/span><\/p>  <\/div><\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cbf40cadc0.jpg",
    "public\/images\/products\/product-537cbf4134bf5.jpg",
    "public\/images\/products\/product-537cbf41931a0.jpg"
  ],
  "price": NumberInt(550000),
  "special_price": NumberInt(0),
  "special_from_date": NumberInt(1400684404),
  "special_to_date": NumberInt(1400684404),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(19),
  "category": [
    NumberInt(3)
  ],
  "related_products": [
    "537cbdf4968384f406000029",
    "533ee3779683845811000029",
    "533ee28d9683848413000029",
    "533ee0e3968384f413000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T15:03:05.0Z"),
  "created_at": ISODate("2014-05-21T15:00:04.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cda1e968384141300002a"),
  "name": "Dép xỏ ngón đi biển cho nam",
  "code": "CR_51173",
  "slug": "dep-xo-ngon-di-bien-cho-nam",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - D&eacute;p xỏ ng&oacute;n đi biển cho nam<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- D&eacute;p xỏ ng&oacute;n cho nam với trẻ trung, năng động v&agrave; c&aacute; t&iacute;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Thiết kế th&iacute;ch hợp cho những hoạt động m&ugrave;a h&egrave; như du lịch, d&atilde; ngoại, đi biển<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Kiểu quai d&eacute;p xỏ ng&oacute;n.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Quai vải mềm mại, kh&ocirc;ng g&acirc;y hằn ch&acirc;n<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu xốp mềm mại, cho bạn cảm gi&aacute;c thoải m&aacute;i, dễ chịu d&ugrave; phải vận động cả ng&agrave;y<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Đế thiết kế c&aacute;c rảnh nhỏ chống trơn trượt.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- D&eacute;p xỏ ng&oacute;n đi biển cho nam<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-72c24b4d-d5ea-6502-26b9-dbc3e664aedb\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">M&ugrave;a h&egrave;, m&ugrave;a của du lịch v&agrave; của những hoạt động ngo&agrave;i trời. Ch&iacute;nh v&igrave; vậy, với mỗi người trong ch&uacute;ng ta từ ph&aacute;i đẹp tới c&aacute;c đấng m&agrave;y r&acirc;u đều cần trang bị cho m&igrave;nh những m&oacute;n đồ ph&ugrave; hợp như mũ, v&aacute;y, &aacute;o, quần sooc, k&iacute;nh m&aacute;t.... Tuy nhi&ecirc;n sẽ thật l&agrave; một thiếu s&oacute;t lớn nếu c&aacute;c ch&agrave;ng trai kh&ocirc;ng lựa chọn cho m&igrave;nh đ&ocirc;i d&eacute;p xỏ ng&oacute;n đi biển cho nam m&agrave; cucre.vn giới thiệu trong deal h&ocirc;m nay để thật sự thoải m&aacute;i trong từng sải bước v&agrave; từng hoạt động đang gọi mời khi h&egrave; về.<\/span><\/span><\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cd9fb0b7f3.jpg\" alt=\"\" \/>&nbsp;&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-D&eacute;p xỏ ng&oacute;n đi biển cho nam -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-72c24b4d-d5eb-6a8a-3381-08657f3fa1da\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Với thiết kế xỏ ng&oacute;n trẻ trung, d&eacute;p được l&agrave;m từ chất liệu da xốp mềm mại, tho&aacute;ng m&aacute;t mang tới cho người sử dụng sự thoải m&aacute;i nhất cho đ&ocirc;i ch&acirc;n. D&ugrave; bạn c&oacute; chạy, nhảy hay ng&acirc;m trong nước sản phẩm vẫn c&oacute; được độ bền gi&uacute;p bạn an t&acirc;m đi trong mọi ho&agrave;n cảnh.<\/span><\/span><\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cd9fbe250f.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\"><strong>-Trẻ trung, năng động-<\/strong><\/p>  <p style=\"text-align: center;\"><strong><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cd9fc4524b.jpg\" alt=\"\" \/><\/strong><\/p>  <p style=\"text-align: center;\"><strong>-Đế thiết kế những r&atilde;nh chống trơn trượt-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cd9fc9eb5d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\"><strong>-Quai vải mềm, kh&ocirc;ng g&acirc;y xước da-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cd9fd3b865.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Chất liệu xốp mềm mại, tho&aacute;ng m&aacute;t-<\/strong><\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cd9fdd169d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\"><strong>-Cho ch&agrave;ng thật tự tin trong những ng&agrave;y h&egrave; dạo phố hay đi biển-<\/strong><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cd9f9b1a96.jpg",
    "public\/images\/products\/product-537cd9fa1cea2.jpg",
    "public\/images\/products\/product-537cd9fa8cfea.jpg"
  ],
  "price": NumberInt(149000),
  "special_price": NumberInt(79000),
  "special_from_date": NumberInt(1400691230),
  "special_to_date": NumberInt(1400691230),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(28),
  "category": [
    NumberInt(3)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T16:53:50.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cda6d968384801000002a"),
  "name": "Dép xỏ ngón nam da cao cấp",
  "code": "CR_49039",
  "slug": "dep-xo-ngon-nam-da-cao-cap",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - D&eacute;p xỏ ng&oacute;n nam da cao cấp<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\"><br id=\"docs-internal-guid-1d996dd9-2bd4-0141-0124-3a04e22c6fac\" \/>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- D&eacute;p xỏ ng&oacute;n da nam cao cấp kiểu d&aacute;ng xỏ ng&oacute;n trẻ trung, năng động v&agrave; c&aacute; t&iacute;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Thiết kế th&iacute;ch hợp cho những hoạt động m&ugrave;a h&egrave;.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Kiểu quai d&eacute;p xỏ ng&oacute;n.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Quai chữ V c&aacute;ch điệu<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Dập đinh t&aacute;n quai c&oacute; kh&oacute;a g&agrave;i kim loại trang tr&iacute; tr&ecirc;n quai d&eacute;p<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chỉ may viền nổi kh&aacute;c m&agrave;u<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- In logo thương hiệu tr&ecirc;n mặt đế d&eacute;p.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- D&eacute;p xỏ ng&oacute;n nam da cao cấp<\/h2>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1d996dd9-2bd9-26b4-e61f-096c0be0f63d\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">M&ugrave;a h&egrave;, m&ugrave;a của du lịch v&agrave; của những hoạt động ngo&agrave;i trời. Ch&iacute;nh v&igrave; vậy, với mỗi người trong ch&uacute;ng ta từ ph&aacute;i đẹp tới c&aacute;c đấng m&agrave;y r&acirc;u đều cần trang bị cho m&igrave;nh những m&oacute;n đồ ph&ugrave; hợp như mũ, v&aacute;y, &aacute;o, quần sooc, k&iacute;nh m&aacute;t.... Tuy nhi&ecirc;n sẽ thật l&agrave; một thiếu s&oacute;t lớn nếu c&aacute;c ch&agrave;ng trai kh&ocirc;ng lựa chọn cho m&igrave;nh đ&ocirc;i d&eacute;p sandal xỏ ng&oacute;n m&agrave; cucre.vn giới thiệu trong deal h&ocirc;m nay để thật sự thoải m&aacute;i trong từng sải bước v&agrave; từng hoạt động đang gọi mời khi h&egrave; về.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda5a25281.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Sandal xỏ ng&oacute;n cho nam kiểu d&aacute;ng trẻ trung, hiện đại -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda5a7d269.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1d996dd9-2bda-e9ed-bd91-ecffa2eecb43\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Với thiết kế xỏ ng&oacute;n trẻ trung, d&eacute;p xỏ ng&oacute;n nam được l&agrave;m từ chất liệu da phối hợp với đế từ nhựa cao su tổng hợp mang tới cho người sử dụng sự thoải m&aacute;i nhất cho đ&ocirc;i ch&acirc;n. D&ugrave; bạn c&oacute; chạy, nhảy hay ng&acirc;m trong nước sản phẩm vẫn c&oacute; được độ bền gi&uacute;p bạn an t&acirc;m đi trong mọi ho&agrave;n cảnh.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda5adf733.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Quai d&eacute;p bằng da, c&oacute; t&aacute;n đinh chắc chắn ở c&aacute;c mối nối -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda5b78d30.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Đế d&eacute;p với thiết kế v&acirc;n dạng tổ ong n&ecirc;n c&oacute; độ ma s&aacute;t tốt, hạn chế những tai nạn do đường trơn hiệu quả -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda5c04c65.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\"><strong>- D&aacute;ng d&eacute;p thanh gọn, dễ d&agrave;ng phối đồ trong nhiều ho&agrave;n cảnh kh&aacute;c nhau -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda5c5e659.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Sản phẩm c&oacute; nhiều size cho bạn lựa chọn cho cỡ ch&acirc;n của m&igrave;nh -<\/strong><\/p>  <p style=\"text-align: justify;\"><br \/> <span id=\"docs-internal-guid-1d996dd9-2be1-5c10-5e2b-4b84b31301f5\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">D&ugrave; bạn l&agrave; ch&agrave;ng nh&acirc;n vi&ecirc;n văn ph&ograve;ng, l&agrave; học sinh, sinh vi&ecirc;n th&igrave; với đ&ocirc;i sandal n&agrave;y bạn sẽ được trở về với ch&iacute;nh m&igrave;nh, với đ&ocirc;i ch&acirc;n thoải m&aacute;i v&agrave; được n&acirc;ng niu một c&aacute;ch trọn vẹn. H&atilde;y nhanh tay đặt MUA bạn nh&eacute;.<\/span><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cda59a0f56.jpg"
  ],
  "price": NumberInt(500000),
  "special_price": NumberInt(250000),
  "special_from_date": NumberInt(1400691309),
  "special_to_date": NumberInt(1400691309),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(49),
  "category": [
    NumberInt(3)
  ],
  "related_products": [
    "537cda1e968384141300002a"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T16:55:09.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cdc5c968384480c00002e"),
  "name": "Áo đôi tình yêu SWEET love phong cách",
  "code": "CR_43627",
  "slug": "ao-doi-tinh-yeu-sweet-love-phong-cach",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u SWEET love phong c&aacute;ch<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p id=\"docs-internal-guid-63a6654e-6d28-76a9-4009-dc5f3666b8c4\" dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; font-size: 12.222222328186035px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o in h&igrave;nh ngộ nghĩnh, kiểu d&aacute;ng trẻ trung, rất hợp với c&aacute;c bạn trẻ.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; font-size: 12.222222328186035px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o mang những th&ocirc;ng điệp dễ thương v&agrave; đầy &yacute; nghĩa về t&igrave;nh y&ecirc;u k&egrave;m những th&ocirc;ng điệp ấy l&agrave; những h&igrave;nh ảnh ngộ nghĩnh, vui mắt.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; font-size: 12.222222328186035px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Với &aacute;o đ&ocirc;i, bạn v&agrave; người ấy sẽ thật nổi trội v&agrave; hấp dẫn, đặc biệt l&agrave; kh&ocirc;ng bị đụng h&agrave;ng khi đi dạo phố hay du lịch c&ugrave;ng bạn b&egrave;.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u SWEET love phong c&aacute;ch<\/h2>  <div>&nbsp;<\/div>  <div>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2a78e1f.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2ae3340.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>-&Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Bạn hạnh ph&uacute;c v&agrave; tự h&agrave;o về người ấy của m&igrave;nh. Bạn muốn h&eacute;t l&ecirc;n với cả thế giới biết rằng đ&oacute; l&agrave; một nửa y&ecirc;u thương của bạn. H&atilde;y thể hiện điều đ&oacute; bằng thời trang, bằng &aacute;o đ&ocirc;i t&igrave;nh nh&acirc;n.<\/span><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2bcabb3.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>-Gắn kết t&igrave;nh y&ecirc;u đ&ocirc;i lứa-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Trẻ trung, năng động c&ugrave;ng &aacute;o cặp t&igrave;nh nh&acirc;n: Những chiếc &aacute;o với nhiều m&agrave;u sắc n&agrave;y sẽ &ldquo;thay lời muốn n&oacute;i&rdquo;, gi&uacute;p b&agrave;y tỏ t&igrave;nh cảm của bạn d&agrave;nh cho người ấy. &Aacute;o mang những th&ocirc;ng điệp dễ thương v&agrave; đầy &yacute; nghĩa về t&igrave;nh y&ecirc;u k&egrave;m những th&ocirc;ng điệp ấy l&agrave; những h&igrave;nh ảnh ngộ nghĩnh, vui mắt.<\/span><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 750px; height: 500px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2c4767f.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>-Chất liệu thun cotton thấm h&uacute;t mồ h&ocirc;i-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Với mẫu &aacute;o đ&ocirc;i họa tiết mặt ngố m&agrave; Cucre mang tới cho bạn h&ocirc;m nay, bạn v&agrave; người ấy sẽ thật nổi trội v&agrave; hấp dẫn, đặc biệt l&agrave; kh&ocirc;ng bị đụng h&agrave;ng khi đi dạo phố hay du lịch c&ugrave;ng bạn b&egrave;.<\/span><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2ccaa2c.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>-Kiểu d&aacute;ng rộng r&atilde;i, tho&aacute;ng m&aacute;t-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2da9563.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>-Họa tiết đ&aacute;ng y&ecirc;u, x&igrave; tin-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2e2d692.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>- Phù hợp với nhi&ecirc;̀u đ&ocirc;̣ tu&ocirc;̉i -<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc2ea7001.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><span id=\"internal-source-marker_0.4418023668242772\" style=\"font-family: Arial; font-size: 12px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">-Sự lựa chọn cho bạn để thể hiện t&igrave;nh y&ecirc;u với người ấy-<\/span><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Thể hiện t&igrave;nh y&ecirc;u với người ấy c&ugrave;ng &aacute;o đ&ocirc;i c&aacute; t&iacute;nh m&agrave; Cucre mang đến bạn nh&eacute;!<\/span><\/p>  <\/div>  <p>&nbsp;<\/p>  <\/div><\/div>",
  "color": [
    "red",
    "white",
    "blue"
  ],
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cdc2609ca3.jpg",
    "public\/images\/products\/product-537cdc27993c7.jpg",
    "public\/images\/products\/product-537cdc299b04b.jpg",
    "public\/images\/products\/product-537cdc2a0d011.jpg"
  ],
  "price": NumberInt(250000),
  "special_price": NumberInt(145000),
  "special_from_date": NumberInt(1400691804),
  "special_to_date": NumberInt(1400691804),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(38),
  "category": [
    NumberInt(2),
    NumberInt(5),
    NumberInt(8),
    NumberInt(9),
    NumberInt(12),
    NumberInt(7)
  ],
  "related_products": [
    "537cdb6b968384480c00002d"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T17:03:24.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cdc98968384141300002b"),
  "name": "Áo đôi tình yêu cho ngày 8-3",
  "code": "CR_45225",
  "slug": "ao-doi-tinh-yeu-cho-ngay-8-3",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u cho ng&agrave;y 8-3<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chỉ với 160.000đ sở hữu ngay sản phẩm &Aacute;o Đ&ocirc;i cho ng&agrave;y m&ugrave;ng 8-3, mang tới th&ocirc;ng điệp cho c&aacute;c bạn trẻ th&ocirc;ng qua trang phục một c&aacute;ch rất ri&ecirc;ng v&agrave; &yacute; nghĩa - Tiết kiệm 50% so với gi&aacute; thị trường 320.000đ<\/span><br \/><br \/>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u với kiểu d&aacute;ng xinh xắn, trẻ trung, hiện đại ch&iacute;nh l&agrave; th&ocirc;ng điệp y&ecirc;u thương của c&aacute;c bạn trẻ.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o được may từ chất liệu cotton mềm mại, họa tiết in nổi bật.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Sản phẩm gồm 1 &aacute;o cho nam v&agrave; 1 cho nữ với kiểu d&aacute;ng tay ngắn, cổ tr&ograve;n năng động.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Với sản phẩm &aacute;o đ&ocirc;i n&agrave;y c&aacute;c bạn trẻ c&oacute; thể sử dụng để l&agrave;m &aacute;o đ&ocirc;i, đồng phục thật c&aacute; t&iacute;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- C&oacute; nhiều m&agrave;u sắc v&agrave; k&iacute;ch cỡ ph&ugrave; hợp cho giới trẻ.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u cho ng&agrave;y 8-3<\/h2>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-21cb4628-dd82-1243-06e6-1e4f5feaab32\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Trẻ trung, năng động c&ugrave;ng &aacute;o cặp t&igrave;nh nh&acirc;n: Những chiếc &aacute;o với nhiều m&agrave;u sắc n&agrave;y sẽ &ldquo;thay lời muốn n&oacute;i&rdquo;, gi&uacute;p b&agrave;y tỏ t&igrave;nh cảm của bạn d&agrave;nh cho người ấy.<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc6eb24f2.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- &Aacute;o đ&ocirc;i t&igrave;nh y&ecirc;u cho giới trẻ với kiểu d&aacute;ng trẻ trung, năng động v&agrave; c&aacute; t&iacute;nh -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc6f2cea7.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Với thiết kế trẻ trung, năng động, c&aacute; t&iacute;nh -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc6f8f035.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Kiểu d&aacute;ng trẻ trung, m&agrave;u sắc nổi bật -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc6fecbd7.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-21cb4628-dd83-a522-0406-b048a4e68f3a\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">&Aacute;o mang những th&ocirc;ng điệp dễ thương v&agrave; đầy &yacute; nghĩa về t&igrave;nh y&ecirc;u k&egrave;m những th&ocirc;ng điệp ấy l&agrave; những h&igrave;nh ảnh ngộ nghĩnh, vui mắt.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc7070a05.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Họa tiết vui mắt, đầy y&ecirc;u thương -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;&nbsp; <img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc70f319f.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdc71682f0.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Tinh nghịch -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-21cb4628-dd84-4541-ebbb-5a9184c7a1be\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">&Aacute;o được l&agrave;m từ chất liệu thun cotton n&ecirc;n c&oacute; độ co gi&atilde;n tối đa v&agrave; dễ d&agrave;ng thấm h&uacute;t mồ h&ocirc;i, rất th&iacute;ch hợp để mặc khi đi d&atilde; ngoại hay tham gia c&aacute;c hoạt động ngo&agrave;i trời. Thật tuyệt phả kh&ocirc;ng n&agrave;o c&aacute;c bạn trẻ, h&atilde;y nhanh tay đặt MUA để sở hữu ngay cặp đ&ocirc;i đ&aacute;ng y&ecirc;u n&agrave;y nh&eacute;.<\/span><\/p>  <\/div><\/div>",
  "color": [
    "green"
  ],
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cdc6d8372c.jpg",
    "public\/images\/products\/product-537cdc6dda907.jpg",
    "public\/images\/products\/product-537cdc6e419de.jpg"
  ],
  "price": NumberInt(320000),
  "special_price": NumberInt(160000),
  "special_from_date": NumberInt(1400691864),
  "special_to_date": NumberInt(1400691864),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(50),
  "category": [
    NumberInt(2),
    NumberInt(5),
    NumberInt(8),
    NumberInt(9),
    NumberInt(12),
    NumberInt(7)
  ],
  "related_products": [
    "537cdc5c968384480c00002e",
    "537cdb6b968384480c00002d"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T17:04:24.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cdd1f9683848c07000029"),
  "name": "Đồng hồ đôi tình yêu AIDAR CHỮ LOVE 2014",
  "code": "CR_43650",
  "slug": "dong-ho-doi-tinh-yeu-aidar-chu-love-2014",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - Đồng hồ đ&ocirc;i t&igrave;nh y&ecirc;u AIDAR CHỮ LOVE 2014<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p id=\"docs-internal-guid-2a2a6333-62f3-4eb4-0611-aa0b1bb821fd\" dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chỉ với 171.000đ sở hữu ngay sản phẩm Đồng hồ đ&ocirc;i t&igrave;nh y&ecirc;u AIDAR CHỮ LOVE 2014, kiểu d&aacute;ng thời trang, đẹp mắt - Tiết kiệm 50% so với gi&aacute; thị trường 340.000đ<\/span><\/p>\r\n<br \/>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Đồng hồ đ&ocirc;i t&igrave;nh y&ecirc;u Aidar chữ Love 2014 với thiết kế tinh tế, trẻ trung v&agrave; rất dễ thương cho c&aacute;c bạn trẻ.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Đồng hồ gồm 1 cho nam v&agrave; 1 cho nữ được c&aacute;c bạn thường chọn l&agrave;m đồ đ&ocirc;i để đ&aacute;nh dấu ri&ecirc;ng cho t&igrave;nh y&ecirc;u của m&igrave;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Thiết kế mặt tr&ograve;n, quai da tinh tế.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Dễ thương với họa tiết Love ngọt ng&agrave;o.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Sản phẩm được đựng trong hộp thật tinh tế để d&agrave;nh tặng cho người m&agrave; bạn y&ecirc;u thương.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Đồng hồ đ&ocirc;i t&igrave;nh y&ecirc;u AIDAR CHỮ LOVE 2014<\/h2>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-2a2a6333-62f0-7f62-6df1-f7c884f27446\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">D&ugrave; valentine đ&atilde; qua nhưng với những bạn đang y&ecirc;u th&igrave; chỉ cần c&oacute; người m&igrave;nh y&ecirc;u ở b&ecirc;n v&agrave; t&igrave;nh y&ecirc;u ở b&ecirc;n th&igrave; cả 4 m&ugrave;a đều l&agrave; m&ugrave;a y&ecirc;u thương. Khi y&ecirc;u, mỗi người đều c&oacute; một c&aacute;ch ri&ecirc;ng để l&agrave;m mới v&agrave; để gắn kết hai nửa lại với nhau. V&agrave; một trong số những c&aacute;ch được c&aacute;c bạn trẻ hay l&agrave;m đ&oacute; ch&iacute;nh l&agrave; sử dụng đồ đ&ocirc;i. Trong deal h&ocirc;m nay cucre.vn xin giới thiệu tới c&aacute;c bạn sản phẩm Đồng hồ đ&ocirc;i t&igrave;nh y&ecirc;u Aidar in chữ Love v&ocirc; c&ugrave;ng đ&aacute;ng y&ecirc;u v&agrave; ngọt ng&agrave;o như một m&oacute;n qu&agrave; d&agrave;nh cho t&igrave;nh y&ecirc;u của c&aacute;c bạn.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdcff46e1c.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Đồng hồ đ&ocirc;i t&igrave;nh y&ecirc;u Aidar chữ Love 2014 tinh tế -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdd000dfbc.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Kiểu d&aacute;ng v&ocirc; c&ugrave;ng trẻ trung, năng động -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdd01099e4.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Mặt đồng hồ với biểu tượng t&igrave;nh y&ecirc;u đầy ngọt ng&agrave;o&nbsp; -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-2a2a6333-62f1-dac4-f88a-6532e72b05ba\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Sản phẩm đồng hồ t&igrave;nh y&ecirc;u Aidar in chữ Love được thiết kế trẻ trung với mặt đồng hồ tr&ograve;n v&agrave; quai đeo bằng da tinh tế cho cả bạn trai v&agrave; bạn g&aacute;i.<\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdd0491c73.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Dễ d&agrave;ng điều chỉnh sao cho vừa vặn với cỡ tay của mỗi người -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdd0507ee2.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Mẫu 1: lứa đ&ocirc;i hạnh ph&uacute;c -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cdd055e69d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Mẫu 2: b&aacute;nh xe t&igrave;nh y&ecirc;u -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img src=\"upload_images\/Image\/01-2014\/duc\/thang02\/952-38765\/a_(13).jpg\" alt=\"\" data-cke-saved-src=\"\/upload_images\/Image\/01-2014\/duc\/thang02\/952-38765\/a_(13).jpg\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-2a2a6333-62f2-a665-69be-b09b905bbb61\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">H&atilde;y nhanh tay đặt MUA để một nửa của m&igrave;nh lu&ocirc;n nhớ thương tới m&igrave;nh với sản phẩm đồng h&agrave;nh c&ugrave;ng bạn tr&ecirc;n mỗi thời điểm của cuộc đời m&igrave;nh bạn nh&eacute;.<\/span><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cdcf950ddb.jpg",
    "public\/images\/products\/product-537cdcf9f31e4.jpg",
    "public\/images\/products\/product-537cdcfa6a758.jpg",
    "public\/images\/products\/product-537cdcfba9834.jpg"
  ],
  "price": NumberInt(340000),
  "special_price": NumberInt(171000),
  "special_from_date": NumberInt(1398618399),
  "special_to_date": NumberInt(1401296799),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(42),
  "category": [
    NumberInt(3)
  ],
  "related_products": [
    "537cdc98968384141300002b",
    "537cdc5c968384480c00002e",
    "537cdb6b968384480c00002d"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T17:06:39.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537cda9d968384480c00002c"),
  "name": "Giày lười nam chất liệu da cao cấp",
  "code": "CR_35153",
  "slug": "giay-luoi-nam-chat-lieu-da-cao-cap",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - Gi&agrave;y lười nam chất liệu da cao cấp<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Gi&agrave;y lười nam chất liệu da cao cấp mang đến cho ph&aacute;i mạnh phong c&aacute;ch lịch l&atilde;m, trẻ trung v&agrave; mạnh mẽ giảm gi&aacute; 48% chỉ c&ograve;n 239.000đ, gi&aacute; thị trường 460.000đ.<\/span><\/p>\r\n<span><span><br \/><\/span><\/span>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Giầy c&oacute; form d&aacute;ng chuẩn, &ocirc;m gọn đ&ocirc;i ch&acirc;n, cho bạn cảm gi&aacute;c thoải m&aacute;i.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Gi&agrave;y được l&agrave;m từ chất liệu da c&ocirc;ng nghiệp thật sang trọng, với chất liệu da mềm mại, tạo sự &ecirc;m &aacute;i cho đ&ocirc;i ch&acirc;n của bạn khi mang. <\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Đ&ocirc;i gi&agrave;y cao cấp n&agrave;y c&oacute; thể trở th&agrave;nh một m&oacute;n qu&agrave; &yacute; nghĩa m&agrave; c&aacute;c bạn nữ d&agrave;nh tặng cho những người đ&agrave;n &ocirc;ng th&acirc;n y&ecirc;u của m&igrave;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Với đ&ocirc;i gi&agrave;y mọi, c&aacute;c bạn nam c&oacute; thể sử dụng trong nhiều dịp như khi đi học, đi l&agrave;m hay đi chơi&hellip;<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Bạn c&oacute; thể thoải m&aacute;i kết hợp gi&agrave;y với c&aacute;c loại quần jeans, quần t&acirc;y, quần kaki&hellip;<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Gi&agrave;y lười nam chất liệu da cao cấp<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda8b8c42f.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Gi&agrave;y lười nam chất liệu da cao cấp-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16c6-0b9e-4e50-3b6c9f6a11fa\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Với bất cứ người ti&ecirc;u d&ugrave;ng n&agrave;o, lựa chọn được đ&ocirc;i giầy kh&ocirc;ng chỉ vừa vặn với đ&ocirc;i ch&acirc;n m&agrave; c&ograve;n đ&aacute;p ứng về kiểu d&aacute;ng thời trang, sự đa dạng trong kết hợp phong c&aacute;ch cũng như t&iacute;nh năng động của sản phẩm. Đặc biệt l&agrave; với ph&aacute;i nam, số lượng giầy d&eacute;p c&oacute; thể &iacute;t hơn ph&aacute;i nữ, nhưng về mặt chất lượng lượng sản phẩm lại được quan t&acirc;m h&agrave;ng đầu..<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda8bf3b79.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Kiểu d&aacute;ng lịch l&atilde;m, sang trọng-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16c6-0b9e-4e50-3b6c9f6a11fa\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Gi&agrave;y lười nam chất liệu da cao cấp m&agrave; Cucre mang đến h&ocirc;m nay được l&agrave;m từ chất liệu da c&ocirc;ng nghiệp sang trọng, bền đẹp, tạo sự &ecirc;m &aacute;i cho đ&ocirc;i ch&acirc;n của bạn khi mang. Gi&agrave;y c&oacute; m&agrave;u đen nam t&iacute;nh, kiểu d&aacute;ng v&agrave; k&iacute;ch cỡ độc đ&aacute;o để bạn thoải sức lựa chọn. Đ&ocirc;i gi&agrave;y cao cấp n&agrave;y c&oacute; thể trở th&agrave;nh một m&oacute;n qu&agrave; &yacute; nghĩa m&agrave; c&aacute;c bạn nữ d&agrave;nh tặng cho những người đ&agrave;n &ocirc;ng th&acirc;n y&ecirc;u của m&igrave;nh.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda8c6ebfb.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu da c&ocirc;ng nghiệp bền đẹp-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16c6-0b9e-4e50-3b6c9f6a11fa\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">C&aacute;c bạn nam c&oacute; thể sử dụng gi&agrave;y trong nhiều dịp như khi đi học, đi l&agrave;m hay đi chơi&hellip; V&agrave; loại gi&agrave;y n&agrave;y cũng kh&ocirc;ng h&egrave; k&eacute;n trang phục, bạn c&oacute; thể thoải m&aacute;i kết hợp gi&agrave;y với c&aacute;c loại quần jeans, quần t&acirc;y, quần kaki&hellip;<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda8cdfa05.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Đế gi&agrave;y thiết kế chống trơn trượt-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16c6-0b9e-4e50-3b6c9f6a11fa\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Với đ&ocirc;i gi&agrave;y lười da cao cấp n&agrave;y, c&aacute;c bạn nam sẽ thấy m&igrave;nh thật lịch l&atilde;m v&agrave; sang trọng m&agrave; vẫn trẻ trung s&agrave;nh điệu khi xuất hiện trước mọi người ở mọi l&uacute;c, mọi nơi. H&atilde;y nhanh tay đặt mua v&agrave; sở hữu ngay đ&ocirc;i gi&agrave;y cao cấp n&agrave;y để sử dụng hay l&agrave;m qu&agrave; tặng cho bạn b&egrave;, người th&acirc;n c&aacute;c bạn nh&eacute;!<\/span><\/span><\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda8d5eb25.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\"><strong>-Đường may tinh tế, kh&eacute;o l&eacute;o-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537cda8e46860.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Dễ kết hợp c&ugrave;ng quần jean, quần &acirc;u, quần th&ocirc;...-<\/strong><\/p>  <p>&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"color: #000000; font-family: Calibri;\"><span style=\"font-size: 15.555556297302246px; line-height: 24.44444465637207px; white-space: pre-wrap;\">Đặt Mua ngay bạn nh&eacute;!<\/span><\/span><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537cda89ad497.jpg",
    "public\/images\/products\/product-537cda8a96cda.jpg",
    "public\/images\/products\/product-537cda8b1671c.jpg"
  ],
  "price": NumberInt(460000),
  "special_price": NumberInt(239000),
  "special_from_date": NumberInt(1400691357),
  "special_to_date": NumberInt(1400691357),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(39),
  "category": [
    NumberInt(3)
  ],
  "related_products": [
    "537cda6d968384801000002a",
    "537cda1e968384141300002a"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T17:40:48.0Z"),
  "created_at": ISODate("2014-05-21T16:55:57.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d2113968384f40600002a"),
  "name": "Áo sơ mi dài tay chất đẹp cho nam-HL",
  "code": "CR_55805",
  "slug": "ao-so-mi-dai-tay-chat-dep-cho-nam-hl",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<div align=\"justify\"><br \/>- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL thiết kế &ocirc;m body gọn g&agrave;ng, trẻ trung.<br \/>- &Aacute;o c&oacute; m&agrave;u xanh nh&atilde; nhặn, rất ph&ugrave; hợp cho c&aacute;c bạn nam y&ecirc;u th&iacute;ch phong c&aacute;ch thời trang sơ mi lịch l&atilde;m<br \/>- Kiểu d&aacute;ng &aacute;o d&agrave;i tay, dễ kết hợp trong nhiều ho&agrave;n cảnh kh&aacute;c nhau.<br \/>- Chất liệu vải đẹp, thấm h&uacute;t mồ h&ocirc;i rất tốt cho người mặc lu&ocirc;n thoải m&aacute;i suốt cả ng&agrave;y d&agrave;i.<br \/>- Ph&ugrave; hợp với mọi v&oacute;c d&aacute;ng cơ thể.<\/div>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam-HL<\/h2>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">&Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam l&agrave; một trong những mẫu sơ mi mới nhất của l&agrave;ng thời trang h&egrave; 2014 m&agrave; Cucre.vn giới thiệu tới c&aacute;c đấng m&agrave;y r&acirc;u ng&agrave;y h&ocirc;m nay. &Aacute;o được thiết kế trẻ trung, hiện đại, &ocirc;m trọn body người mặc gi&uacute;p nổi bật phong c&aacute;ch lịch l&atilde;m đầy c&aacute; t&iacute;nh.<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 700px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d20e2b5f16.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- &Aacute;o sơ mi d&agrave;i tay chất đẹp cho nam HL trẻ trung -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d20e353230.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- &Aacute;o thiết kế cổ đức trẻ trung, hiện đại -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 700px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d20e3dd208.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Chất vải đẹp, mềm mại, thấm h&uacute;t mồ h&ocirc;i rất tốt -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d20e472326.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- T&ocirc;n v&oacute;c d&aacute;ng người mặc -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 700px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d20e504e65.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Dễ mặc theo nhiều phong c&aacute;ch kh&aacute;c nhau -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 600px; height: 900px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d20e5b4b87.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-ae236b6d-0864-9f8c-aab6-c0474cea507b\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Arial; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Với chiếc &aacute;o sơ mi d&agrave;i tay n&agrave;y bạn nam c&oacute; thể kết hợp với quần jeans, gi&agrave;y thể thao như c&aacute;ch th&ocirc;ng dụng nhất. Khi muốn m&igrave;nh biến th&agrave;nh một qu&yacute; &ocirc;ng lịch l&atilde;m, &ldquo;sơ vin&rdquo; sơ mi kẻ với quần tối m&agrave;u v&agrave; một đ&ocirc;i gi&agrave;y da cũng khiến c&aacute;c ch&agrave;ng trở n&ecirc;n nam t&iacute;nh v&agrave; lịch l&atilde;m hơn bao giờ hết.<\/span><\/p>  <\/div><\/div>",
  "size": "S,M,L",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d20e23f113.jpg",
    "public\/images\/products\/product-537d20e27767b.jpg"
  ],
  "price": NumberInt(250000),
  "special_price": NumberInt(138000),
  "special_from_date": NumberInt(1400709395),
  "special_to_date": NumberInt(1400709395),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(16),
  "category": [
    NumberInt(4)
  ],
  "related_products": [
    "537cbf749683844c1e00002a",
    "537cbdf4968384f406000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:05:18.0Z"),
  "created_at": ISODate("2014-05-21T21:56:35.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d21d7968384141300002c"),
  "name": "Áo sơ mi bò ngắn tay",
  "code": "CR_21199",
  "slug": "ao-so-mi-bo-ngan-tay",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o sơ mi b&ograve; ngắn tay<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o thể hiện vẻ nam t&iacute;nh, bụi bặm.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Với đường may chắc chắn, tạo cho bạn cảm gi&aacute;c thoải m&aacute;i, ph&oacute;ng kho&aacute;ng.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Thiết kế hoa văn tr&ecirc;n th&acirc;n &aacute;o cho ch&agrave;ng th&ecirc;m trẻ trung, năng động.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o th&iacute;ch hợp khi mix với quần Jeans hoặc mặc b&ecirc;n ngo&agrave;i &aacute;o ph&ocirc;ng.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Th&iacute;ch hợp để d&agrave;nh tặng cho c&aacute;c ch&agrave;ng.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Sản phẩm &aacute;o sơ mi nam ngắn tay do nh&agrave; thiết kế Vũ Trần tự tay thiết kế. &nbsp;Vũ Trần l&agrave; nh&agrave; thiết kế trẻ c&oacute; tiềm năng tại Việt Nam.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu: vải b&ograve;.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: xanh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch cỡ: size M - D&agrave;nh cho c&acirc;ng nặng trong khoảng 50kg- 60kg, Size L d&agrave;nh cho c&acirc;ng nặng trong khoảng - từ 61kg -75 kg.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi b&ograve; ngắn tay<\/h2>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-44ef3a33-3cf4-b47a-b8cc-f4d90b5f2da4\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bạn l&agrave; một ch&agrave;ng trai trẻ, phong c&aacute;ch. Bạn cần một sự đổi mới trong gu thời trang của m&igrave;nh. Nếu bạn đang cần t&igrave;m một chiếc &aacute;o mang phong c&aacute;ch trẻ trung, khỏe khoắn th&igrave; chiếc &aacute;o sơ mi b&ograve; ch&iacute;nh l&agrave; sự lựa chọn của bạn. &Aacute;o mang phong c&aacute;ch bụi bặm rất th&iacute;ch hợp khi bạn mặc với quần Jeans, giầy thể thao. C&ugrave;ng với kiểu d&aacute;ng trẻ trung, đẹp mắt, những chiếc &aacute;o n&agrave;y c&oacute; thể trở th&agrave;nh qu&agrave; tặng &yacute; nghĩa d&agrave;nh cho c&aacute;c bạn nam trong h&egrave; n&agrave;y.<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2163ebd5a.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Trẻ trung, năng động c&ugrave;ng &aacute;o sơ mi b&ograve; ngắn tay -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21647aa90.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Họa tiết th&ecirc;u hoa xinh xắn -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d216522628.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Thiết kế ngắn tay năng động -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2165afe45.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- D&aacute;ng &aacute;o đu&ocirc;i t&ocirc;m -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d216653b89.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Mạnh mẽ c&ugrave;ng t&uacute;i ngực -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21689adde.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Phối kẻ -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d216959eb7.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Kết hợp c&ugrave;ng Jean -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp; <img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d216a40c18.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- H&atilde;y nhanh tay sở hữu ngay sản phẩm &aacute;o sơ mi b&ograve; ngắn tay để c&ugrave;ng đ&oacute;n một m&ugrave;a h&egrave; năng động bạn nh&eacute; -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <\/div><\/div>",
  "color": [
    "blue"
  ],
  "size": "M,L",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d216337074.jpg",
    "public\/images\/products\/product-537d21636ec83.jpg",
    "public\/images\/products\/product-537d2163a202d.jpg"
  ],
  "price": NumberInt(390000),
  "special_price": NumberInt(199000),
  "special_from_date": NumberInt(1400709591),
  "special_to_date": NumberInt(1400709591),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(11),
  "category": [
    NumberInt(4),
    NumberInt(5)
  ],
  "related_products": [
    "537d214f9683848c0700002a",
    "537d2113968384f40600002a"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:05:18.0Z"),
  "created_at": ISODate("2014-05-21T21:59:51.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d22369683844c1e00002b"),
  "name": "Áo sơ mi tay bồng Lotus",
  "code": "CR_22734",
  "slug": "ao-so-mi-tay-bong-lotus",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o sơ mi tay bồng Lotus<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p id=\"docs-internal-guid-232ae419-8508-7023-04e8-3995752fabcd\" dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\">- &nbsp;Xuất xứ: Việt Nam.<\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &nbsp;Chất liệu: Chiffon<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: T&iacute;m, xanh, cam nhạt<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">- &nbsp;C&oacute; 2 size:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">+ M (chiều ngang th&acirc;n &aacute;o 52 cm x 55cm chiều d&agrave;i từ cổ &aacute;o đến gấu &aacute;o)<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">+ S ( Chiều ngang th&acirc;n &aacute;o 50cm x 54cm chiều d&agrave;i từ cổ &aacute;o đến gấu &aacute;o)<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: rgb(34, 34, 34); background-color: transparent; vertical-align: baseline;\">- Thiết kế: &Aacute;o d&aacute;ng tay bồng, cổ &aacute;o c&aacute;ch điệu.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- &Aacute;o th&iacute;ch hợp với mặc quần &acirc;u, quần jeans, v&aacute;y.. th&iacute;ch hợp để mặc đi l&agrave;m, đi chơi, picnic, dạo phố...<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi tay bồng Lotus<\/h2>  <p id=\"docs-internal-guid-232ae419-8509-8c04-75b8-4fee6f4f0a44\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Những chiếc v&aacute;y hoặc &aacute;o sơ mi với thiết kế tay bồng khiến c&aacute;c bạn nữ thật duy&ecirc;n d&aacute;ng v&agrave; nổi bật, kh&ocirc;ng những thế thiết kế n&agrave;y c&ograve;n rất ph&ugrave; hợp với những bạn nữ vai gầy hay bắp to tay to. Chiếc &aacute;o sơ mi tay bồng g&acirc;y ấn tượng bởi vẻ xinh xắn, dễ thương của d&aacute;ng &aacute;o mang lại cho người mặc. Ống tay được l&agrave;m rộng, phần cổ tay được thắt chun hơi &ocirc;m lại khiến cho c&aacute;nh tay &aacute;o trở n&ecirc;n bồng bềnh thật dễ thương. Kiểu thiết kế n&agrave;y c&ograve;n l&agrave; lựa chọn ho&agrave;n hảo cho những bạn g&aacute;i c&oacute; vai xu&ocirc;i, n&oacute; gi&uacute;p bạn che được khuyết điểm đ&oacute; v&agrave; tạo một bờ vai thon đầy duy&ecirc;n d&aacute;ng.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 750px; height: 450px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21ef96e5f.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Sơmi tay bồng Lotus-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 750px; height: 450px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21eff35b2.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Xanh trẻ trung-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f05a100.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Cam nhạt nhẹ nh&agrave;ng-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 750px; height: 450px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f0e5df4.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- T&iacute;m thời trang-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 750px; height: 450px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f1696b7.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Dễ thương-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f1d207b.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Xinh xắn-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f2924f4.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Dễ mix c&ugrave;ng trang phục-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f30b936.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 750px; height: 450px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21f3831e8.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Vải Chiffon mềm mại, tho&aacute;ng m&aacute;t-<\/strong><\/p>  <\/div><\/div>",
  "color": [
    "blue",
    "orange",
    "violet"
  ],
  "size": "M,S",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d21ef4dc30.jpg"
  ],
  "price": NumberInt(200000),
  "special_price": NumberInt(105000),
  "special_from_date": NumberInt(1400709686),
  "special_to_date": NumberInt(1400709686),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(50),
  "category": [
    NumberInt(6),
    NumberInt(8),
    NumberInt(7)
  ],
  "related_products": [
    "533edd3a968384a01100002a",
    "533edb9b968384a011000029",
    "53359023968384040a000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:05:18.0Z"),
  "created_at": ISODate("2014-05-21T22:01:26.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d22c19683848c0700002b"),
  "name": "Nhẹ nhàng cho giấc ngủ ngon với bộ đồ ngủ quần short áo 2 dây",
  "code": "CR_27997",
  "slug": "nhe-nhang-cho-giac-ngu-ngon-voi-bo-do-ngu-quan-short-ao-2-day",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - Nhẹ nh&agrave;ng cho giấc ngủ ngon với bộ đồ ngủ quần short &aacute;o 2 d&acirc;y<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p id=\"docs-internal-guid-3e4719f2-0dc8-7c9c-8e46-48f85d2a69f1\" dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Bộ sản phẩm bao gồm: &Aacute;o 2 d&acirc;y v&agrave; quần short.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Bộ đồ ngủ trẻ trung, thiết kế hai d&acirc;y điệu đ&agrave;, nữ t&iacute;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Bộ ngủ c&oacute; chất liệu satin lạnh v&agrave; tho&aacute;ng m&aacute;t đem đến cho bạn giấc ngủ s&acirc;u v&agrave; ngon trong những ng&agrave;y h&egrave; oi ả.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch cỡ free size gi&uacute;p bạn cảm thấy thật thoải m&aacute;i v&agrave; dễ d&agrave;ng cử động.<\/span><\/p>\r\n<br \/>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Trung Quốc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: hồng<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu: satin<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch cỡ: free size d&agrave;nh cho bạn g&aacute;i dưới 55 kg.<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Nhẹ nh&agrave;ng cho giấc ngủ ngon với bộ đồ ngủ quần short &aacute;o 2 d&acirc;y<\/h2>  <p id=\"docs-internal-guid-3e4719f2-0dbe-e456-dd6a-6f41e5788cbd\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Sau một ng&agrave;y bận rộn với bao bộn bề lo toan th&igrave; giấc ngủ ngon l&agrave; mơ ước của tất cả mọi người. Tuy nhi&ecirc;n, l&agrave;m thế n&agrave;o để c&oacute; được một giấc ngủ s&acirc;u, kh&ocirc;ng mộng mị gi&uacute;p tinh thần thoải m&aacute;i, tỉnh t&aacute;o cho một ng&agrave;y mới l&agrave;m việc hiệu quả th&igrave; kh&ocirc;ng phải ai cũng biết. B&ecirc;n cạnh &ldquo;chăn ấm, nệm &ecirc;m&rdquo; th&igrave; bộ đồ ngủ m&aacute;t mẻ, thoải m&aacute;i cũng đ&oacute;ng g&oacute;p phần quan trọng gi&uacute;p giấc ngủ của bạn th&ecirc;m trọn vẹn. Trong lượt deal h&ocirc;m nay, Cucre mang đến cho bạn bộ đồ ngủ quần short &aacute;o 2 d&acirc;y trẻ trung, quyến rũ n&oacute;ng bỏng, hấp dẫn v&agrave; thoải m&aacute;i cho bạn những giấc ngủ nhẹ nh&agrave;ng, s&acirc;u giấc.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d229a8f48c.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Bộ đồ ngủ quần sooc, &aacute;o d&acirc;y-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d229b54133.jpg\" alt=\"\" \/>&nbsp;&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Quyến rũ v&agrave; tinh tế-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d229c0a3cf.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Chất liệu satin mềm mượt-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d229c9748d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-L&atilde;ng mạn v&agrave; ngọt ng&agrave;o-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d229d34ad7.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-3e4719f2-0dc3-0b8f-b4aa-3c342d89477d\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><span style=\"font-size: 12px; font-family: Arial; color: #000000; background-color: transparent; font-weight: bold; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">-Cho bạn giấc ngủ s&acirc;u v&agrave; ngon trong những ng&agrave;y h&egrave; oi ả-<\/span><\/p>  <\/div><\/div>",
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d229a18f7e.jpg",
    "public\/images\/products\/product-537d229a4a638.jpg"
  ],
  "price": NumberInt(120000),
  "special_price": NumberInt(70000),
  "special_from_date": NumberInt(1400709825),
  "special_to_date": NumberInt(1400709825),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(16),
  "category": [
    NumberInt(11)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:05:18.0Z"),
  "created_at": ISODate("2014-05-21T22:03:45.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d22f3968384f40600002b"),
  "name": "Bộ áo choàng ngủ + quần chíp vải lụa sexy",
  "code": "CR_31621",
  "slug": "bo-ao-choang-ngu-quan-chip-vai-lua-sexy",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Bộ đồ gi&uacute;p bạn trở n&ecirc;n quyến rũ, gợi cảm v&agrave; sexy hơn <\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu bằng vải lụa mềm mịn, nhẹ nh&agrave;ng v&agrave; tho&aacute;ng m&aacute;t&hellip; cho giấc ngủ th&ecirc;m trọn vẹn<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- &Aacute;o cho&agrave;ng + quần chip chất liệu satin với kiểu d&aacute;ng Freesize ph&ugrave; hợp cho tất cả ph&aacute;i đẹp.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- &nbsp;&Aacute;o kho&aacute;c ngo&agrave;i thể hiện sự k&iacute;n đ&aacute;o m&agrave; vẫn hấp dẫn trong ph&ograve;ng ngủ.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Điểm nhấn l&agrave; sợi d&acirc;y k&egrave;m &aacute;o c&oacute; thể thắt &ocirc;m trọn v&ograve;ng eo l&agrave;m nổi bật d&aacute;ng sang trọng v&agrave; quyến rũ.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Trung Quốc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- M&agrave;u sắc: đen, hồng<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: vải lụa<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- K&iacute;ch cỡ: free size.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Bộ &aacute;o cho&agrave;ng ngủ + quần ch&iacute;p vải lụa sexy<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d039822.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Bộ &aacute;o cho&agrave;ng ngủ + quần ch&iacute;p vải lụa-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-77e2a6cc-90d5-e5fd-dfc9-9b18b7ad945d\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Những bộ đồ ngủ quyến rũ tạo n&eacute;t hấp dẫn đầy tự tin kh&ocirc;ng c&ograve;n đơn giản l&agrave; những bộ đồ cotton giản dị. Đồ ngủ d&agrave;nh cho ph&aacute;i đẹp được thiết kế ng&agrave;y c&agrave;ng quyến rũ v&agrave; gợi cảm khoe những đường cong thật hấp dẫn. Trong lượt dela h&ocirc;m nay, Cucre mang đến cho bạn Bộ &aacute;o cho&agrave;ng ngủ + quần ch&iacute;p vải lụa sexy - Xu hướng tạo sự huyền b&iacute;, ki&ecirc;u kỳ cho ph&aacute;i đẹp.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d0dee9f.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Quyến rũ-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\"><span id=\"docs-internal-guid-77e2a6cc-90d5-e5fd-dfc9-9b18b7ad945d\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Những chiếc &aacute;o ngủ quyến rũ l&agrave; \"vũ kh&iacute; b&iacute; ẩn\" gi&uacute;p bạn trở n&ecirc;n hấp dẫn quyến rũ v&agrave; phong c&aacute;ch ngay cả trong ph&ograve;ng ngủ. Bằng chất liệu vải vải lụa mềm mại, tạo cảm gi&aacute;c thoải m&aacute;i tự tin, vừa l&agrave;m nổi bật đường cong cơ thể vừa che đi những khiếm khuyết người mặc, khơi gợi sự kh&aacute;m ph&aacute;.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d175fb8.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu vải lụa mỏng manh, mềm mại-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d314d92.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Pha ren tinh tế-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d401fab.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Quần chip sexy v&agrave; d&acirc;y đai thắt eo k&egrave;m theo-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d463993.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-M&agrave;u hồng ngọt ng&agrave;o-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d4bb4c0.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-M&agrave;u đen b&iacute; ẩn, c&aacute; t&iacute;nh-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d5294ae.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Mang đến cho bạn g&aacute;i sự nữ t&iacute;nh v&agrave; gợi cảm-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d5b1a21.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Khơi gợi được n&eacute;t dịu d&agrave;ng v&agrave; duy&ecirc;n d&aacute;ng trong mắt người bạn đời-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d22d627880.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Đặt Mua ngay bạn nh&eacute;-<\/strong><\/p>  <\/div><\/div>",
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d22cf84d2c.jpg",
    "public\/images\/products\/product-537d22cfb442b.jpg",
    "public\/images\/products\/product-537d22cfe70de.jpg"
  ],
  "price": NumberInt(170000),
  "special_price": NumberInt(85000),
  "special_from_date": NumberInt(1400709875),
  "special_to_date": NumberInt(1400709875),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(44),
  "category": [
    NumberInt(11)
  ],
  "related_products": [
    "537d22c19683848c0700002b"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:05:18.0Z"),
  "created_at": ISODate("2014-05-21T22:04:35.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d214f9683848c0700002a"),
  "name": "Áo sơ mi nam ngắn tay đẹp, phong cách, kẻ caro",
  "code": "CR_25974",
  "slug": "ao-so-mi-nam-ngan-tay-dep-phong-cach-ke-caro",
  "status": "1",
  "short_description": "<h2 style=\"font-family: arial; margin: 0px 0px 10px; padding: 0px; font-size: 15px; overflow: hidden;\">Đặc điểm nổi bật - &Aacute;o sơ mi nam ngắn tay đẹp, phong c&aacute;ch, kẻ caro<\/h2>\r\n<div class=\"hightlight_content\" style=\"font-family: arial; font-size: 14px;\">\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: #333333; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">&Aacute;o sơ mi nam ngắn tay đẹp, phong c&aacute;ch, kẻ caro giảm gi&aacute; 48% chỉ c&ograve;n 89.000đ, gi&aacute; thị trường 170.000đ.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: #333333; vertical-align: baseline; white-space: pre-wrap;\">&nbsp;<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: #333333; vertical-align: baseline; white-space: pre-wrap;\">- &Aacute;o sơ mi nam h&igrave;nh họa tiết v&agrave; kẻ car&ocirc; thể hiện vẻ nam t&iacute;nh, s&agrave;nh điệu cho ph&aacute;i mạnh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: #333333; vertical-align: baseline; white-space: pre-wrap;\">- &Aacute;o được thiết kế d&agrave;i tay, &ocirc;m body, chất liệu cotton th&ocirc; mềm cao cấp, khả năng thấm h&uacute;t mồ h&ocirc;i rất tốt.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: #333333; vertical-align: baseline; white-space: pre-wrap;\">- Với những đường may tinh tế, kh&eacute;o l&eacute;o, &aacute;o may với form cực chuẩn, ph&ugrave; hợp với v&oacute;c d&aacute;ng của người Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"margin: 0pt 0px; padding: 0px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; color: #333333; vertical-align: baseline; white-space: pre-wrap;\">- C&oacute; thể kết hợp với nhiều loại quần như quần t&acirc;y, quần jeans, quần kaki&hellip;<\/span><\/p>\r\n<\/div>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi nam ngắn tay đẹp, phong c&aacute;ch, kẻ caro<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-5a219ef1-33c7-f627-8647-916bdbdd3cea\"><span style=\"font-size: 15px; font-family: Calibri; color: #333333; vertical-align: baseline; white-space: pre-wrap;\">Những chiếc &aacute;o sơ mi lu&ocirc;n l&agrave; thứ kh&ocirc;ng thể thiếu trong tủ &aacute;o của những ch&agrave;ng trai năng động, những qu&yacute; &ocirc;ng th&agrave;nh đạt. Sơ mi nam thường kh&ocirc;ng cầu k&igrave; về kiểu d&aacute;ng v&agrave; h&igrave;nh thức trang tr&iacute;, tuy nhi&ecirc;n n&oacute; hội tụ đầy đủ được vẻ đẹp cổ điển v&agrave; l&atilde;ng mạn của ph&aacute;i mạnh, ch&uacute;ng ta kh&ocirc;ng thể phủ nhận sự hấp dẫn của những người đ&agrave;n &ocirc;ng khi họ kho&aacute;c l&ecirc;n m&igrave;nh chiếc sơ mi lịch l&atilde;m, phong c&aacute;ch. Cucre.vn giới thiệu tới bạn chiếc sơ mi nam ngắn tay với họa tiết kẻ caro cực thời trang v&agrave; s&agrave;nh điệu.<\/span><\/span><\/p>  <div>&nbsp;<\/div>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21228daef.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>- Sơ mi ngắn tay kẻ caro d&agrave;nh cho nam-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2123440ab.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>- Lịch l&atilde;m, sang trọng v&agrave; dễ mix trang phục-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d212426af4.jpg\" alt=\"\" \/><\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>- Chất liệu cotton tho&aacute;ng m&aacute;t, khả năng thấm h&uacute;t mồ h&ocirc;i cao-<\/strong><\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2124f078d.jpg\" alt=\"\" \/><\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\">&nbsp;<\/p>  <p style=\"font-size: 12px; font-family: arial; margin: 0px; padding: 0px; color: #000000; text-align: center;\"><strong>- Đường may cẩn thận, sắc sảo-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2125ecbd8.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>- Kẻ xanh trẻ trung-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2126589a9.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>- Kẻ đỏ thời trang-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2126c1e12.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>- C&aacute; t&iacute;nh-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d21273f49c.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>- Form &aacute;o thoải m&aacute;i-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\"><span style=\"background-color: #121212; font-size: 12px; color: #ffffff;\">Cucre.Vn<\/span><\/div>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d21224a147.jpg"
  ],
  "price": NumberInt(170000),
  "special_price": NumberInt(89000),
  "special_from_date": NumberInt(1400709455),
  "special_to_date": NumberInt(1400709455),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(18),
  "category": [
    NumberInt(4),
    NumberInt(5)
  ],
  "related_products": [
    "537d2113968384f40600002a"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:05:18.0Z"),
  "created_at": ISODate("2014-05-21T21:57:35.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d23799683848c0700002c"),
  "name": "Bộ quần áo ngủ 2 dây sexy",
  "code": "CR_31619",
  "slug": "bo-quan-ao-ngu-2-day-sexy",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Được l&agrave;m từ chất liệu vải mềm mại, kh&ocirc; tho&aacute;ng, cho bạn cảm gi&aacute;c thoải m&aacute;i, kh&ocirc;ng hề bị g&ograve; b&oacute;, kh&oacute; chịu.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Thiết kế độc đ&aacute;o với hai d&acirc;y xinh xắn, điệu đ&agrave; cho bạn n&eacute;t duy&ecirc;n d&aacute;ng ngay cả khi ở nh&agrave;<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Trang phục ngủ bằng satanh lu&ocirc;n mang lại cho người mặc cảm gi&aacute;c thoải m&aacute;i, dễ chịu b&ecirc;n cạnh n&eacute;t trẻ trung, nữ t&iacute;nh v&agrave; gợi cảm.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Trung Quốc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- M&agrave;u sắc: nhiều m&agrave;u<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: satin<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- K&iacute;ch cỡ: free size ph&ugrave; hợp với bạn g&aacute;i dưới 53 kg.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Bộ quần &aacute;o ngủ 2 d&acirc;y sexy<\/h2>  <p style=\"text-align: justify;\"><span style=\"background-color: transparent; color: #000000; font-family: Calibri; font-size: 15px; white-space: pre-wrap; line-height: 1.5; text-align: justify;\">Cuộc sống lu&ocirc;n bận rộn hối hả nhưng bạn đừng qu&ecirc;n những gi&acirc;y ph&uacute;t nghỉ ngơi thoải m&atilde;i b&ecirc;n người th&acirc;n v&agrave; đừng qu&ecirc;n việc chăm s&oacute;c, r&egrave;n luyện sức khỏe cho thật tốt sau những ng&agrave;y d&agrave;i mệt mỏi nh&eacute;! Một bộ trang phục mặc ở nh&agrave; thoải m&aacute;i khiến bạn lu&ocirc;n tự tin, tr&agrave;n đầy sức sống cũng sẽ g&oacute;p phần l&agrave;m bạn giảm căng thẳng, stress giữa bộn bề lo toan của cuộc sống. <\/span><span style=\"background-color: transparent; color: #000000; font-family: Calibri; font-size: 15px; white-space: pre-wrap; text-align: center;\">Với Bộ quần &aacute;o ngủ 2 d&acirc;y sexy m&agrave; Cucre mang đến h&ocirc;m nay, chắc chắn bạn sẽ c&oacute; những giờ ph&uacute;t thư gi&atilde;n tuyệt đối trong ng&ocirc;i nh&agrave; th&acirc;n y&ecirc;u của m&igrave;nh.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d234e5a8f2.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Bộ quần &aacute;o ngủ 2 d&acirc;y sexy-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d234f6f49b.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Kiểu d&aacute;ng xinh xắn v&agrave; đ&aacute;ng y&ecirc;u-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d23509b236.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Chất liệu satin mềm mại, tinh tế-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d235210d6d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Mang đến cảm gi&aacute;c thoải m&aacute;i cho bạn g&aacute;i khi ở nh&agrave;-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;<img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d23530bc16.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Đặt Mua ngay bạn nh&eacute;-<\/strong><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d234d87d99.jpg",
    "public\/images\/products\/product-537d234ddda7b.jpg"
  ],
  "price": NumberInt(150000),
  "special_price": NumberInt(89000),
  "special_from_date": NumberInt(1400710009),
  "special_to_date": NumberInt(1400710009),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(50),
  "category": [
    NumberInt(11)
  ],
  "related_products": [
    "537d22f3968384f40600002b",
    "537d22c19683848c0700002b"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:06:49.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d23af968384480c000030"),
  "name": "Quyến rũ với combo 02 áo yếm 2 dây cổ ren",
  "code": "CR_27995",
  "slug": "quyen-ru-voi-combo-02-ao-yem-2-day-co-ren",
  "status": "1",
  "short_description": "<p id=\"docs-internal-guid-3e4719f2-0aac-7611-7da9-9926b695543c\" dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Combo 02 &aacute;o yếm 2 d&acirc;y cổ ren ngo&agrave;i năng động, trẻ trung; mang lại sự thoải m&aacute;i v&agrave; tho&aacute;ng m&aacute;t trong m&ugrave;a h&egrave;.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Sản phẩm đa dạng về m&agrave;u sắc, kết hợp được với nhiều quần &aacute;o thời trang kh&aacute;c nhau như: quần sort hay jean, mặc b&ecirc;n trong, mặc khi ở nh&agrave;, mặc đi ngủ khi dạo phố, v&aacute;y hoa x&ograve;e dịu d&agrave;ng, nữ t&iacute;nh hay mặc b&ecirc;n trong những &aacute;o kho&aacute;c giả vest rất sang trọng.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu thun cotton, chất liệu co gi&atilde;n, thấm h&uacute;t mồ h&ocirc;i cực tốt<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- T&ocirc;n được đường cong nữ t&iacute;nh quyến rũ nhưng vẫn kh&ocirc;ng l&agrave;m người mặc cảm thấy kh&oacute; chịu.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Trung Quốc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: trắng, xanh<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu: thun<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch cỡ: free size d&agrave;nh cho bạn g&aacute;i dưới 48 kg.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Quyến rũ với combo 02 &aacute;o yếm 2 d&acirc;y cổ ren.<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d238e46d5d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Quyến rũ với combo 02 &aacute;o yếm 2 d&acirc;y cổ ren-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-3e4719f2-0a61-4c44-5ac6-bfd6433555e2\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">M&ugrave;a h&egrave; cũng l&agrave; l&uacute;c thời trang &aacute;o hai d&acirc;y được l&ecirc;n ng&ocirc;i. Với ưu điểm m&aacute;t, nhẹ, thấm h&uacute;t mồ h&ocirc;i tốt v&agrave; đặc biệt l&agrave; c&oacute; thể kết hợp với rất nhiều trang phục kh&aacute;c tạo n&ecirc;n v&ocirc; v&agrave;n phong c&aacute;ch c&aacute; t&iacute;nh, chiếc &aacute;o hai d&acirc;y lu&ocirc;n l&agrave; một phần kh&ocirc;ng thể thiếu trong tủ quần &aacute;o của c&aacute;c &ldquo;t&iacute;n đồ thời trang&rdquo;. Cucre mang đến cho bạn combo 02 &Aacute;o yếm 2 d&acirc;y cổ ren v&ocirc; c&ugrave;ng gợi cảm v&agrave; quyến rũ.<\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d238eb1e75.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Kiểu d&aacute;ng thời trang-<\/strong><\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Ưu điểm của &aacute;o yếm l&agrave; m&aacute;t mẻ v&agrave; dễ mặc cũng như dễ kết hợp c&ugrave;ng nhiều kiểu trang phục. Khoe được &nbsp;đ&ocirc;i vai trần nuột n&agrave; của bạn. Chiếc &aacute;o n&agrave;y vừa mang đến cho ph&aacute;i đẹp vẻ ngọt ng&agrave;o, l&atilde;ng mạn v&agrave; tạo cho bạn cảm gi&aacute;c dễ chịu, thư gi&atilde;n &nbsp;sau một ng&agrave;y l&agrave;m việc mệt nhọc. Kh&ocirc;ng những thế, đ&acirc;y cũng l&agrave; c&ograve;n l&agrave; một trợ thủ đắc lực cho bạn trong việc thể hiện n&eacute;t nữ t&iacute;nh v&agrave; những đường cong quyến rũ, khoe bờ vai thon gọn mịn m&agrave;ng của bạn. <\/span><\/p>  <p>&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d238f85d0a.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Viền ren tinh tế, mềm mại-<\/strong><\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Với &aacute;o thun hai d&acirc;y cổ ren n&agrave;y &nbsp;bạn nữ sẽ tha hồ kết hợp với c&aacute;c loại trang phục. C&aacute; t&iacute;nh với quần jean, năng động với quần short ngắn v&agrave; giầy thể thao, nữ t&iacute;nh với v&aacute;y x&ograve;e, v&aacute;y maxi, hoặc mặc như &aacute;o l&oacute;t b&ecirc;n trong trang phục vest nơi c&ocirc;ng sở. Khi bạn sử dụng l&agrave;m đồ ngủ, chiếc &aacute;o sẽ gi&uacute;p bạn khoe được đường cong gợi cảm, l&agrave;m to&aacute;t l&ecirc;n vẻ đẹp của đ&ocirc;i vai trần gợi cảm, đ&ocirc;i ch&acirc;n thon d&agrave;i, v&ograve;ng eo nhỏ duy&ecirc;n d&aacute;ng v&agrave; t&ocirc;n l&ecirc;n l&agrave;n da mịn m&agrave;ng của bạn. Tất cả sẽ mang đến cho ph&aacute;i đẹp vẻ ngọt ng&agrave;o, l&atilde;ng mạn đến kh&oacute; qu&ecirc;n.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp; <img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d239033c15.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Kiểu d&aacute;ng &ocirc;m s&aacute;t-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2390d08c9.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Dễ kết hợp với quần sooc, quần jean, ch&acirc;n v&aacute;y..-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d23918715f.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Mang đến cho bạn g&aacute;i phong c&aacute;ch nữ t&iacute;nh, thanh lịch-<\/strong><\/p>  <\/div><\/div>",
  "color": [
    "white"
  ],
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d238d6d1d2.jpg",
    "public\/images\/products\/product-537d238dbdce2.jpg"
  ],
  "price": NumberInt(120000),
  "special_price": NumberInt(75000),
  "special_from_date": NumberInt(1400710063),
  "special_to_date": NumberInt(1400710063),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(27),
  "category": [
    NumberInt(11)
  ],
  "related_products": [
    "537d23799683848c0700002c",
    "537d22f3968384f40600002b",
    "537d22c19683848c0700002b"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:07:43.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d24259683844c1e00002c"),
  "name": "Áo thể thao VNXK co giãn 4 chiều cao cấp",
  "code": "CR_48905",
  "slug": "ao-the-thao-vnxk-co-gian-4-chieu-cao-cap",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- &Aacute;o thể thao VNXK co gi&atilde;n 4 chiều cao cấp mang đến cho ph&aacute;i mạnh vẻ khỏe khoắn, năng động, thời trang.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu vải cotton mềm mại, tho&aacute;ng m&aacute;t, dễ thấm h&uacute;t mồ h&ocirc;i<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Thể hiện vẻ nam t&iacute;nh, lịch l&atilde;m của ph&aacute;i mạnh<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Đường may chắc chắn, mềm mại v&agrave; h&uacute;t ẩm tốt, tạo cho bạn cảm gi&aacute;c thoải m&aacute;i<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Kiểu d&aacute;ng trẻ trung, ph&ugrave; hợp để mua l&agrave;m qu&agrave; tặng cho c&aacute;c bạn nam.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- M&agrave;u sắc: đen, x&aacute;m, xanh t&iacute;m than<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: thun cotton<\/span><\/p>\r\n<p><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- K&iacute;ch cỡ: free size ph&ugrave; hợp bạn trai dưới 72kg.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o thể thao VNXK co gi&atilde;n 4 chiều cao cấp<\/h2>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d23fe565ee.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-&Aacute;o thể thao VNXK co gi&atilde;n 4 chiều cao cấp-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-158c2f66-743e-1bb2-c7e0-0234c6796f46\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Hầu như ch&agrave;ng trai n&agrave;o cũng y&ecirc;u th&iacute;ch thể thao. Kh&ocirc;ng chỉ thể hiện được sức mạnh của đ&agrave;n &ocirc;ng, thể thao c&ograve;n khiến anh ấy vui th&iacute;ch với sự thử th&aacute;ch. Trang phục thể thao từ đ&oacute; cũng trở n&ecirc;n rất quan trọng với ch&agrave;ng.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d23fecf43e.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Năng động, khỏe khoắn-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-158c2f66-743e-1bb2-c7e0-0234c6796f46\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Điều quan trọng nhất khi lựa chọn trang phục thể thao l&agrave; sự thoải m&aacute;i, dễ vận động v&agrave; chất vải thấm mồ h&ocirc;i tốt. Nhưng kh&ocirc;ng chỉ vậy, trang phục thể thao cũng cần hợp thời trang v&agrave; tạo được phong c&aacute;ch cho bạn. Cucre sẽ đem đến cho bạn &Aacute;o thể thao VNXK co gi&atilde;n 4 chiều cao cấp được &nbsp;thiết kế d&agrave;nh ri&ecirc;ng cho hoạt động thể thao năng động.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d23ffccdd8.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu cotton co gi&atilde;n cực tốt-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-158c2f66-743e-1bb2-c7e0-0234c6796f46\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Thiết kế đơn giản, chiếc &aacute;o khiến bạn tự tin hơn khi thể hiện m&igrave;nh, d&ugrave; trong bất k&igrave; một m&ocirc;n thể thao n&agrave;o. Chất liệu cotton mềm mại, co gi&atilde;n, thấm h&uacute;t mồ h&ocirc;i mang đến cho ch&agrave;ng cảm gi&aacute;c thoải m&aacute;i, dễ chịu d&ugrave; phải vận động cả ng&agrave;y! H&atilde;y d&agrave;nh tặng cho ch&agrave;ng của bạn m&oacute;n qu&agrave; bất ngờ v&agrave; &yacute; nghĩa n&agrave;y nh&eacute;!<\/span><\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp; &nbsp; &nbsp;<img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24007eb9a.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Mang đến cảm gi&aacute;c thoải m&aacute;i, dễ chịu d&ugrave; phải vận động cả ng&agrave;y-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24011bfcc.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Đường may chắc chắn-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2402418de.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-C&oacute; thể mặc đi ngủ, chơi thể thao...-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d240373d44.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-D&aacute;ng &aacute;o hơi &ocirc;m t&ocirc;n d&aacute;ng-<\/strong><\/p>  <\/div><\/div>",
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d23fd2a204.jpg",
    "public\/images\/products\/product-537d23fd81fbe.jpg",
    "public\/images\/products\/product-537d23fdd8538.jpg"
  ],
  "price": NumberInt(290000),
  "special_price": NumberInt(170000),
  "special_from_date": NumberInt(1400710181),
  "special_to_date": NumberInt(1400710181),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(27),
  "category": [
    NumberInt(5)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:09:41.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d247a9683848c0700002d"),
  "name": "Quần ống lửng có khóa trẻ trung",
  "code": "CR_48762",
  "slug": "quan-ong-lung-co-khoa-tre-trung",
  "status": "1",
  "short_description": "<p id=\"docs-internal-guid-1d996dd9-2c03-a710-25e5-ccd6e08cb3fd\" dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Quần ống lửng c&oacute; kh&oacute;a được thiết kế theo d&aacute;ng quầng ngố, gấu su&ocirc;ng kh&ocirc;ng bo n&ecirc;n rất thoải m&aacute;i.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Quần ống lửng c&oacute; kh&oacute;a được thiết kế tr&ecirc;n nền chất liệu vải kaki th&ocirc; với những đường cắt c&uacute;p thật tinh tế.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Quần ống lửng với t&uacute;i b&ecirc;n ống quần thật tiện lợi.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc trang nh&atilde;, trẻ trung, ph&ugrave; hợp với nhiều v&oacute;c d&aacute;ng cơ thể.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Ph&ugrave; hợp mặc đi du lịch, đi dạo phố...<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Th&ocirc;ng tin sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu: kaki th&ocirc;<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: v&agrave;ng da b&ograve;, m&agrave;u be sữa, ghi x&aacute;m.<\/span><\/p>\r\n<p><span style=\"font-family: Calibri; background-color: transparent; font-size: 15px; vertical-align: baseline;\">- K&iacute;ch cỡ: Free size - th&iacute;ch hợp cho bạn nam dưới 70kg.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Quần ống lửng c&oacute; kh&oacute;a trẻ trung<\/h2>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1d996dd9-2c08-5bed-25b6-b39d84a0471e\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">M&ugrave;a h&egrave; lu&ocirc;n l&agrave; thời điểm m&agrave; d&aacute;ng vẻ của c&aacute;c khuynh hướng thời trang trở n&ecirc;n khỏe khoắn, năng động v&agrave; thật gợi cảm. Quả l&agrave; thiếu s&oacute;t nếu qu&ecirc;n kh&ocirc;ng bổ sung chiếc quần short hợp thời v&agrave;o tủ đồ m&ugrave;a h&egrave; của bạn. Bởi với những ưu điểm nổi trội như mang lại sự trẻ trung, khỏe khoắn, tinh nghịch v&agrave; năng động, quần short lu&ocirc;n c&oacute; sức h&uacute;t mạnh mẽ đối với c&aacute;c t&iacute;n đồ thời trang s&agrave;nh điệu, nhất l&agrave; v&agrave;o những ng&agrave;y h&egrave; oi ả. Cucre.vn xin giới thiệu tới c&aacute;c ch&agrave;ng trai trẻ sản phẩm phẩm Quần ống lửng c&oacute; kh&oacute;a trẻ trung cho ph&aacute;i mạnh.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2457c2dc6.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Quần ống lửng c&oacute; kh&oacute;a k&eacute;o trẻ trung cho ph&aacute;i mạnh -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2458b0fad.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1d996dd9-2c08-c86c-b8ad-fefc8e5a2246\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Quần ống lửng c&oacute; kh&oacute;a k&eacute;o cho nam với nhiều m&agrave;u sắc trung t&iacute;nh kết hợp c&aacute;c đường may c&aacute;ch điệu trẻ trung chắc chắn sẽ kh&ocirc;ng l&agrave;m bạn thất vọng.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp; <img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2459eee97.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Kiểu d&aacute;ng trẻ trung, khỏe khoắn -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d245ab157c.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1d996dd9-2c09-517f-6189-650c3ca1a602\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Đường may rất chắc chắn, d&agrave;y dặn n&ecirc;n bạn ho&agrave;n to&agrave;n c&oacute; thể y&ecirc;n t&acirc;m về độ bền. Với m&agrave;u sắc trang nh&atilde; kết hợp với 02 t&uacute;i ch&eacute;o ph&iacute;a trước v&agrave; t&uacute;i hộp ph&iacute;a sau, dễ mặc, dễ mix với &aacute;o ph&ocirc;ng, &aacute;o ba lỗ... rất th&iacute;ch hợp cho c&aacute;c bạn trẻ năng động, vận động, chơi thể thao, đi du lịch, đi dạo phố, cafe c&ugrave;ng bạn b&egrave;.<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d245b500cc.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p id=\"docs-internal-guid-1d996dd9-2c0a-17a0-a61c-fd174c7ec708\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Chất liệu vải kaki mềm l&agrave; một lợi thế của sản phẩm, tạo sự thoải m&aacute;i, nhẹ nh&agrave;ng, tho&aacute;ng m&aacute;t cho người sử dụng. Khi chạm tay v&agrave;o quần, bạn sẽ nhận thấy sự mềm mại to&aacute;t l&ecirc;n từ những sợi vải được dệt một c&aacute;ch kh&eacute;o l&eacute;o.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d245c1b2ea.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span id=\"docs-internal-guid-1d996dd9-2c0a-4e28-a35e-dd2b66e3b485\" style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">C&aacute;c chị em phụ nữ c&oacute; thể mua ngay những chiếc quần ống lửng n&agrave;y để d&agrave;nh tặng cho những người đ&agrave;n &ocirc;ng trong gia đ&igrave;nh như chồng, anh trai, em trai&hellip; Một m&oacute;n qu&agrave; &yacute; nghĩa trong dịp h&egrave; năm nay!<\/span><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d245676fc8.jpg",
    "public\/images\/products\/product-537d2456e4c05.jpg",
    "public\/images\/products\/product-537d2457546df.jpg"
  ],
  "price": NumberInt(160000),
  "special_price": NumberInt(83000),
  "special_from_date": NumberInt(1400710266),
  "special_to_date": NumberInt(1400710266),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(29),
  "category": [
    NumberInt(5)
  ],
  "related_products": [
    "537d24259683844c1e00002c"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:11:06.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d24a0968384fc1d00002a"),
  "name": "Quần kaki trẻ trung và lịch lãm cho nam",
  "code": "CR_38031",
  "slug": "quan-kaki-tre-trung-va-lich-lam-cho-nam",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Quần ống đứng t&ocirc;n d&aacute;ng cho ch&agrave;ng<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu vải kaki thấm h&uacute;t tốt, tho&aacute;ng m&aacute;t, dễ vận động. <\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Quần kaki nam được may bằng chất liệu kaki tốt, đặc biệt, vải đ&atilde; được giặt hấp trước khi may n&ecirc;n kh&ocirc;ng g&acirc;y co r&uacute;t sợi v&agrave; bạc m&agrave;u.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Thiết kế tiện dụng quần cạp, k&eacute;o kh&oacute;a, c&oacute; c&uacute;c, với 2 t&uacute;i ch&eacute;o hai b&ecirc;n v&agrave; 2 t&uacute;i sau đựng được nhiều đồ.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Đường may chắc chắn, tạo cho bạn cảm gi&aacute;c thoải m&aacute;i, kiểu d&aacute;ng trẻ trung.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- M&agrave;u sắc: đen, be<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: kaki<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Quần kaki trẻ trung v&agrave; lịch l&atilde;m cho nam<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24867b9b8.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Quần kakI cho nam -<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-5ac43db3-a326-ddb9-4f92-011f71f83e4f\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">B&ecirc;n cạnh quần &acirc;u, quần jean th&igrave; quần kaki cũng l&agrave; lựa chọn tối ưu d&agrave;nh cho c&aacute;c bạn nam để tạo cho m&igrave;nh phong c&aacute;ch thời trang trẻ trung nhưng cũng đầy lịch l&atilde;m. <\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2486f18b8.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-T<strong style=\"font-size: 12px;\">rẻ trung v&agrave; lịch l&atilde;m-<\/strong><\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-5ac43db3-a326-ddb9-4f92-011f71f83e4f\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Quần kaki trẻ trung v&agrave; lịch l&atilde;m cho nam m&agrave; Cucre mang đến h&ocirc;m nay được thiết kế tinh tế với 2 t&uacute;i trước, 2 t&uacute;i sau, v&agrave; c&oacute; nhiều size để bạn thoải m&aacute;i lựa chọn. Quần được may từ chất liệu kaki cao cấp, c&oacute; độ bền cao, kh&ocirc;ng bị co r&uacute;t sợi vải hay phai m&agrave;u sau một thời gian sử dụng. D&ugrave; kết hợp với &aacute;o sơ mi hay &aacute;o thun th&igrave; bạn cũng đều trở n&ecirc;n mạnh mẽ, nam t&iacute;nh hơn trong mắt mọi người.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24876acf5.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Quần ống đứng, t&ocirc;n d&aacute;ng cho ch&agrave;ng-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-5ac43db3-a326-ddb9-4f92-011f71f83e4f\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">Quần kaki nam được may bằng chất liệu kaki tốt, kh&ocirc;ng co r&uacute;t sợi vải sau một thời gian sử dụng. Quần c&oacute; m&agrave;u sắc trẻ trung v&agrave; nam t&iacute;nh, t&ocirc;n vẻ đẹp khỏe khoắn, năng động v&agrave; lịch l&atilde;m của ph&aacute;i mạnh.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2487e3222.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu kaki bền đẹp-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-5ac43db3-a326-ddb9-4f92-011f71f83e4f\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;\">M&agrave;u sắc trung t&iacute;nh của quần gi&uacute;p ch&agrave;ng dễ kết hợp với những chiếc &aacute;o ph&ocirc;ng hoặc những chiếc &aacute;o sơ mi với nhiều m&agrave;u sắc kh&aacute;c nhau. <\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <div>&nbsp;<\/div>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24885ea38.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Dễ kết hợp với &aacute;o ph&ocirc;ng, &aacute;o sơ mi...-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2488d113e.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-C&oacute; nhiều m&agrave;u cho bạn lựa chọn-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d248949356.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Ch&agrave;ng c&oacute; thể mặc khi đi học, đi l&agrave;m hay đi chơi c&ugrave;ng người ấy đấy-<\/strong><\/p>  <\/div><\/div>",
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d2484a5f8a.jpg",
    "public\/images\/products\/product-537d2484e8c64.jpg",
    "public\/images\/products\/product-537d248540125.jpg",
    "public\/images\/products\/product-537d24858afbb.jpg",
    "public\/images\/products\/product-537d2485dd75d.jpg"
  ],
  "price": NumberInt(250000),
  "special_price": NumberInt(159000),
  "special_from_date": NumberInt(1400710304),
  "special_to_date": NumberInt(1400710304),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(19),
  "category": [
    NumberInt(4),
    NumberInt(5)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:11:44.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d24fd9683848c0700002e"),
  "name": "Váy ren cổ Peter pan",
  "code": "CR_26924",
  "slug": "vay-ren-co-peter-pan",
  "status": "1",
  "short_description": "<p id=\"docs-internal-guid-28b002eb-79df-53e7-d5c5-c9cd0ea5bfb7\" dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- V&aacute;y ren cổ Peter Pan được thiết kế nữ t&iacute;nh, dịu d&agrave;ng, gi&uacute;p bạn g&aacute;i tự tin khoe v&oacute;c d&aacute;ng.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Form d&aacute;ng su&ocirc;ng xinh xắn, đ&aacute;ng y&ecirc;u nhiều điểm nhấn tỉ mỉ với cổ Peter Pan hợp mốt, viền đen cổ v&agrave; tay &aacute;o<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u trắng nh&atilde; nhặn, tươi s&aacute;ng, t&ocirc;n l&ecirc;n l&agrave;n da trắng nuột n&agrave; của ph&aacute;i đẹp.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu ren mềm mại, gi&uacute;p từng bước đi bạn g&aacute;i th&ecirc;m mềm mại v&agrave; uyển chuyển.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Trung Quốc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: trắng<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu: ren<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch cỡ: free size ph&ugrave; hợp với bạn g&aacute;i dưới 52 kg.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- V&aacute;y ren cổ Peter pan<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24c2528d1.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-V&aacute;y ren cổ Peter pan-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Cổ Peter Pan hiện đang l&agrave; một trong những xu hướng được rất nhiều bạn trẻ, đặc biệt l&agrave; teen girl y&ecirc;u th&iacute;ch. Lấy cảm hứng từ trang phục của một nh&acirc;n vật trong c&acirc;u chuyện cổ t&iacute;ch quen thuộc, những kiểu v&aacute;y cổ Peter Pan tạo cho bạn g&aacute;i vẻ ngo&agrave;i đậm chất vintage, rất nữ t&iacute;nh v&agrave; ngọt ng&agrave;o.<\/span><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\"> Trong lượt deal h&ocirc;m nay, Cucre mang tới chi bạn sản phẩm V&aacute;y ren cổ peter pan xinh xắn, dễ thương với m&agrave;u trắng tinh kh&ocirc;i, dịu d&agrave;ng.<\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24c300a4d.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Kiểu d&aacute;ng nữ t&iacute;nh, thanh lịch-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">V&aacute;y ren cổ peter pan được nhiều bạn g&aacute;i y&ecirc;u th&iacute;ch lựa chọn bởi sự dịu d&agrave;ng, đem đến cho người mặc vẻ nữ t&iacute;nh v&agrave; thanh lịch bất ngờ. Form d&aacute;ng xinh xắn đ&aacute;ng y&ecirc;u với phần cổ peter pan hợp mốt, d&aacute;ng v&aacute;y su&ocirc;ng gọn g&agrave;ng, ph&ugrave; hợp với nhiều d&aacute;ng người, gi&uacute;p che đi những khuyết điểm của v&ugrave;ng eo. <\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24c39ad45.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu ren mềm mại, quyến rũ với m&agrave;u trắng tinh kh&ocirc;i-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">V&aacute;y được may từ chất liệu ren mềm mại, mịn m&agrave;ng, c&oacute; độ rủ nhẹ, gi&uacute;p bạn g&aacute;i tự tin sải bước. M&agrave;u trắng nh&atilde; nhặn kết hợp c&ugrave;ng viền đen ở cổ &aacute;o v&agrave; tay &aacute;o v&agrave; tinh tế nhấn mạnh gu thời trang thu h&uacute;t v&agrave; nổi bật của ph&aacute;i đẹp.<\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24c450104.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-D&aacute;ng su&ocirc;ng ph&ugrave; hợp với mọi d&aacute;ng người-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Với v&aacute;y cổ Peter Pan xinh xắn bạn dễ d&agrave;ng kết hợp c&ugrave;ng những chiếc t&uacute;i c&oacute; phần quai mảnh, quai sợi x&iacute;ch mỏng, t&uacute;i cầm tay d&aacute;ng vu&ocirc;ng hay chữ nhật trẻ trung. Những kiểu t&uacute;i n&agrave;y sẽ g&oacute;p phần mang lại cho bạn n&eacute;t cổ điển trong s&aacute;ng v&agrave; ngọt ng&agrave;o.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp; <img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d24c4cefeb.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-C&oacute; thể mặc đi l&agrave;m, đi chơi, đi dự tiệc v&ocirc; c&ugrave;ng tiện lợi...-<\/strong><\/p>  <\/div><\/div>",
  "color": [
    "white"
  ],
  "size": "FreeSize",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d24c12b388.jpg",
    "public\/images\/products\/product-537d24c17afe3.jpg",
    "public\/images\/products\/product-537d24c1d9b19.jpg"
  ],
  "price": NumberInt(260000),
  "special_price": NumberInt(130000),
  "special_from_date": NumberInt(1399414397),
  "special_to_date": NumberInt(1400883197),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(38),
  "category": [
    NumberInt(8),
    NumberInt(7),
    NumberInt(11)
  ],
  "related_products": [
    "537d22c19683848c0700002b",
    "53359023968384040a000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:13:17.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d255c968384141300002d"),
  "name": "Đầm xẻ vai duyên dáng",
  "code": "CR_25669",
  "slug": "dam-xe-vai-duyen-dang",
  "status": "1",
  "short_description": "<p id=\"docs-internal-guid-63a6654e-e995-9d5f-2607-53d9d5f6a03f\" dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Gi&uacute;p bạn g&aacute;i th&ecirc;m ấn tượng với kiểu xẻ vai cực nữ t&iacute;nh, quyến rũ<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu thun co gi&atilde;n, tạo cảm gi&aacute;c thoải m&aacute;i cho người mặc.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- C&oacute; thể mặc xuống phố, dự tiệc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Thời trang dịu d&agrave;ng, t&ocirc;n d&aacute;ng bạn g&aacute;i với kiểu hở vai gợi cảm.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Th&iacute;ch hợp cho c&aacute;c party buổi tối<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Việt nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu: thun co gi&atilde;n &nbsp;thấm h&uacute;t mồ h&ocirc;i mang đến cảm gi&aacute;c tho&aacute;i m&aacute;i<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: v&agrave;ng cam, xanh t&iacute;m than<br style=\"font-family: arial;\" \/><\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch thước: free size ph&ugrave; hợp với bạn g&aacute;i dưới 55 kg<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Đầm xẻ vai duy&ecirc;n d&aacute;ng<\/h2>  <p>&nbsp;<\/p>  <div>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2538c8f62.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>-Đầm xẻ vai duy&ecirc;n d&aacute;ng-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p id=\"internal-source-marker_0.4592635474906649\" dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Đầm xẻ vai kh&ocirc;ng qu&aacute; hở hang nhưng lại được mệnh danh l&agrave; vũ kh&iacute; gợi cảm, mang đến sự mềm mại v&agrave; quyến rũ cho c&aacute;c bạn g&aacute;i. Lần n&agrave;y bạn kh&ocirc;ng thể bỏ qua kiểu d&aacute;ng Đầm xẻ vai duy&ecirc;n d&aacute;ng m&agrave; Cucre.vn mang lại ng&agrave;y h&ocirc;m nay. Những đường xẻ vai kh&ocirc;ng chỉ tạo điểm nhấn bắt mắt cho chiếc đầm, m&agrave; c&ograve;n gi&uacute;p bạn &nbsp;h&ocirc; biến bờ vai trở n&ecirc;n thon gọn hơn do mọi sự ch&uacute; &yacute; đều đ&atilde; tập trung v&agrave;o đường n&eacute;t rực rỡ tr&ecirc;n.<\/span><\/p>  <p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d253929cf6.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>-Thiết kế độc đ&aacute;o, c&aacute; t&iacute;nh-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Đầm xẻ vai trơn m&agrave;u v&agrave; b&oacute; s&aacute;t sẽ c&agrave;ng l&agrave;m t&ocirc;n l&ecirc;n vẻ đẹp v&agrave; đường cong của bạn. Ch&iacute;nh v&igrave; vậy gi&uacute;p cho bạn g&aacute;i c&oacute; th&acirc;n h&igrave;nh tr&ograve;n sẽ đẹp hơn với v&ograve;ng hai thon gọn v&agrave; bạn g&aacute;i gầy sẽ đầy đặn hơn, v&igrave; ưu điểm n&agrave;y m&agrave; đầm xẻ vai &ocirc;m sexy lu&ocirc;n được đa số bạn g&aacute;i lựa chọn.<\/span><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d253981a49.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; color: #000000; font-size: 12px; line-height: 1.5; text-align: center;\"><strong>-Thiết kế xẻ vai gi&uacute;p bạn g&aacute;i khoe kh&eacute;o được bờ vai v&agrave; c&aacute;nh tay trắng ngần-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px;\"><br \/> <span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Sản phẩm được thiết kế xẻ vai với thiết kế ấn tượng gi&uacute;p bạn g&aacute;i khoe kh&eacute;o được bờ vai thon quyến rũ, &ocirc;m trọn 3 v&ograve;ng, mang đến cho bạn g&aacute;i vẻ gợi cảm, sang trọng. C&oacute; thể phối với c&aacute;c phụ kiện như trang sức, v&iacute; cầm tay... Gi&uacute;p bạn g&aacute;i trở n&ecirc;n nổi bật v&agrave; sang trọng giữa đ&aacute;m đ&ocirc;ng. Cho bạn tự tin thể hiện ch&iacute;nh m&igrave;nh nh&eacute;!<\/span><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d253a081b5.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>-Mang lại sự quyến rũ, nữ t&iacute;nh thu h&uacute;t mọi người xung quanh-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d253a9cea0.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d253af0c42.jpg\" alt=\"\" \/><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\"><strong>-&Ocirc;m s&aacute;t, t&ocirc;n l&ecirc;n những đường cong quyến rũ của bạn g&aacute;i-<\/strong><\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: center;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: justify;\">&nbsp;<\/p>  <p style=\"font-family: arial; margin: 0px; padding: 0px; color: #000000; font-size: 12px; text-align: justify;\">&nbsp;<\/p>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\"><img class=\"img-responsive\" style=\"border: none; max-width: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d253b8ed30.jpg\" alt=\"\" \/><\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\">&nbsp;<\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\">&nbsp;<\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\"><strong>-C&oacute; 2 m&agrave;u cho bạn lựa chọn-<\/strong><\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\">&nbsp;<\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\">&nbsp;<\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\">&nbsp;<\/div>  <div style=\"font-family: arial; color: #000000; font-size: 12px;\" align=\"center\">  <p style=\"font-size: 12px; margin: 0px; padding: 0px; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">Đặt mua ngay bạn nh&eacute;!<\/span><\/p>  <\/div>  <\/div>  <p>&nbsp;<\/p>  <\/div><\/div>",
  "color": [
    "blue",
    "orange"
  ],
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d2537b248c.jpg",
    "public\/images\/products\/product-537d253810632.jpg",
    "public\/images\/products\/product-537d2538684a3.jpg"
  ],
  "price": NumberInt(190000),
  "special_price": NumberInt(105000),
  "special_from_date": NumberInt(1399414492),
  "special_to_date": NumberInt(1401315292),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(15),
  "category": [
    NumberInt(6),
    NumberInt(8),
    NumberInt(7)
  ],
  "related_products": [
    "537d24fd9683848c0700002e",
    "53359023968384040a000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:14:52.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d259c968384fc1d00002b"),
  "name": "Đầm 2 dây xòe duyên dáng",
  "code": "CR_24984",
  "slug": "dam-2-day-xoe-duyen-dang",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Đầm thun 2 d&acirc;y gi&uacute;p bạn nữ tr&ocirc;ng thật tươi xinh trong nắng h&egrave;.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Thiết kế trẻ trung với phần ch&acirc;n v&aacute;y x&ograve;e nhẹ, thiết kế hai d&acirc;y gi&uacute;p bạn nữ t&ocirc;n l&ecirc;n v&ograve;ng 1 c&ugrave;ng d&aacute;ng người người đầy đặn.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu thun co gi&atilde;n thoải m&aacute;i vận động.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Phối m&agrave;u độc đ&aacute;o với những t&ocirc;ng m&agrave;u của m&ugrave;a h&egrave; như v&agrave;ng, hồng, xanh dương.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Th&iacute;ch hợp mặc đi chơi, dạo phố, đi biển&hellip;<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Việt Nam.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.65703125;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Kiểu d&aacute;ng Free size, th&iacute;ch hợp cho bạn nữ dưới 50kg<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: thun co gi&atilde;n.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Đầm 2 d&acirc;y x&ograve;e duy&ecirc;n d&aacute;ng<\/h2>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d256cb2da5.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Đầm 2 d&acirc;y x&ograve;e duy&ecirc;n d&aacute;ng-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-707c262f-0e94-5af4-1ff7-a934ceca3e99\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Kh&ocirc;ng phải tới b&acirc;y giờ những chiếc đầm thun cho bạn g&aacute;i mới tạo n&ecirc;n cơn sốt, thế nhưng m&ugrave;a thời trang h&egrave; 2013, những chiếc đầm thun mới thực sự b&ugrave;ng nổ v&agrave; chắc chắn sẽ m&ecirc; hoặc bất cứ ai ngắm nh&igrave;n ch&uacute;ng. <\/span><\/span><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Trong lượt deal h&ocirc;m nay, Cucre mang đến cho bạn chiếc <\/span><span style=\"font-size: 15px; font-family: Calibri; color: #333333; background-color: #f9f9f9; vertical-align: baseline; white-space: pre-wrap;\">Đầm 2 d&acirc;y x&ograve;e duy&ecirc;n d&aacute;ng<\/span><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\"> thời trang, được may từ chất liệu vải thun cao cấp với độ co gi&atilde;n 4 chiều, tho&aacute;ng m&aacute;t, dễ thấm h&uacute;t mồ h&ocirc;i, mang lại sự thoải m&aacute;i tối đa cho người mặc. <\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d256d5f626.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Kiểu d&aacute;ng đơn giản nhưng tinh tế-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-707c262f-0e94-5af4-1ff7-a934ceca3e99\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Đầm thun 2 d&acirc;y l&agrave; một trong những kiểu thời trang được chị em phụ nữ đặc biệt y&ecirc;u th&iacute;ch. Thiết kế tinh tế, đẹp mắt kh&ocirc;ng chỉ gi&uacute;p chị em thể hiện vẻ nữ t&iacute;nh m&agrave; c&ograve;n khoe được đường cong quyến rũ của m&igrave;nh.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center; width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d256e09504.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Ch&acirc;n v&aacute;y hơi x&ograve;e trẻ trung-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-707c262f-0e94-5af4-1ff7-a934ceca3e99\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Chất liệu vải n&agrave;y c&ograve;n c&oacute; t&aacute;c dụng chống nhăn, hạn chế bị x&ugrave; l&ocirc;ng hay phai m&agrave;u l&agrave;m ảnh hưởng đến độ thẩm mỹ của chiếc &aacute;o khi giặt. Kiểu d&aacute;ng 2 d&acirc;y l&agrave;m t&ocirc;n th&ecirc;m những đường cong nữ t&iacute;nh vốn c&oacute; của c&aacute;c bạn g&aacute;i.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center; width: 700px; height: 467px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d256e86d14.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu thun co gi&atilde;n, thấm h&uacute;t mồ h&ocirc;i-<\/strong><\/p>  <p style=\"text-align: justify;\"><br \/> <span id=\"docs-internal-guid-707c262f-0e94-5af4-1ff7-a934ceca3e99\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Đầm được thiết kế tinh tế với 2 d&acirc;y đơn giản nhưng s&agrave;nh điệu, trẻ trung tạo điểm nhấn th&ecirc;m cho v&ograve;ng eo, c&agrave;ng l&agrave;m cho bạn trở n&ecirc;n nữ t&iacute;nh v&agrave; đ&aacute;ng y&ecirc;u hơn. Đầm thun 2 d&acirc;y x&ograve;e một trang phục quyến rũ nhưng kh&ocirc;ng k&eacute;m phần duy&ecirc;n d&aacute;ng th&iacute;ch hợp mặc dự tiệc hay dạo phố hoặc gặp gỡ bạn b&egrave;.<\/span><\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d256f5bc7a.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-M&agrave;u sắc trẻ trung-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 500px; height: 750px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d257005534.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Dễ kết hợp trang phục khi đi chơi, dạo phố...-<\/strong><\/p>  <\/div><\/div>",
  "color": [
    "blue"
  ],
  "size": "FreeSize",
  "hot": "1",
  "image": [
    "public\/images\/products\/product-537d256bb1d8a.jpg",
    "public\/images\/products\/product-537d256c0cd15.jpg",
    "public\/images\/products\/product-537d256c5793e.jpg"
  ],
  "price": NumberInt(220000),
  "special_price": NumberInt(109000),
  "special_from_date": NumberInt(1400019356),
  "special_to_date": NumberInt(1401228956),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(40),
  "category": [
    NumberInt(8),
    NumberInt(7)
  ],
  "related_products": [
    "537d255c968384141300002d"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:15:56.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d25d8968384141300002e"),
  "name": "Quần ngố kaki nam lịch lãm phong cách",
  "code": "CR_52243",
  "slug": "quan-ngo-kaki-nam-lich-lam-phong-cach",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Quần tho&aacute;ng m&aacute;t, mềm mại v&agrave; h&uacute;t ẩm tốt, tạo cho bạn cảm gi&aacute;c thoải m&aacute;i v&agrave; kh&ocirc;ng g&acirc;y ảnh hưởng đến sức khỏe.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Kiểu d&aacute;ng thời trang, trẻ trung, th&iacute;ch hợp cho c&aacute;c bạn trẻ năng động hay tham gia chơi thể thao.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Th&iacute;ch hợp cho những buổi dạo phố c&ugrave;ng bạn b&egrave;, khi đi chơi xa, du lịch, picnic&hellip;<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- D&agrave;i ngang gối cho bạn nam thoải m&aacute;i khi vận động<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Th&ocirc;ng tin chi tiết:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: được may bằng chất liệu kaki, &iacute;t nhăn, bền đẹp.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- M&agrave;u sắc: đen, v&agrave;ng be, x&aacute;m, xanh t&iacute;m than<\/span><\/p>\r\n<p><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- K&iacute;ch cỡ : free size ( d&agrave;nh cho bạn nam dưới 55kg )<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- Quần ngố kaki nam lịch l&atilde;m phong c&aacute;ch<\/h2>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25b4a2856.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Quần ngố kaki nam lịch l&atilde;m phong c&aacute;ch-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-158c2f66-9c5c-23d7-836e-4b844d5da916\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Chiếc quần ngố lu&ocirc;n l&agrave; vật dụng kh&ocirc;ng thể thiếu trong tủ quần &aacute;o của ph&aacute;i mạnh, đặc biệt l&agrave; trong thời tiết n&oacute;ng bức của m&ugrave;a h&egrave;. V&agrave;o những l&uacute;c thư gi&atilde;n, cafe với bạn b&egrave; th&acirc;n thiết, c&ograve;n g&igrave; thoải m&aacute;i hơn khi c&aacute;c ch&agrave;ng c&oacute; thể nhanh ch&oacute;ng diện một chiếc quần ngố đơn giản m&agrave; vẫn trẻ trung v&agrave; phong c&aacute;ch.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25b56f159.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Trẻ trung, nam t&iacute;nh-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid-158c2f66-9c5c-23d7-836e-4b844d5da916\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">M&ugrave;a h&egrave; năm nay đang đến thật gần, c&aacute;i oi bức của thời tiết sẽ khiến bạn phải tạm rời xa những chiếc quần jeans bụi hay quần t&acirc;y d&agrave;i. H&atilde;y chọn cho m&igrave;nh những chiếc quần ngố kaki nam lịch l&atilde;m phong c&aacute;ch gọn nhẹ, m&aacute;t mẻ để m&ugrave;a h&egrave; của bạn th&ecirc;m phần sinh động nh&eacute;!<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25b664d25.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu th&ocirc; kaki-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span style=\"color: #000000; font-family: Calibri; font-size: 15px; white-space: pre-wrap; text-align: center;\">Với chiếc quần ngố trẻ trung năng động n&agrave;y, ph&aacute;i nam c&oacute; thể tham gia những buổi dạo phố c&ugrave;ng bạn b&egrave;, những chuyến du lịch xa, hay tổ chức picnic ngo&agrave;i trời, bạn cũng được tha hồ kết hợp c&ugrave;ng những chiếc &aacute;o thun đủ m&agrave;u sắc, tạo n&ecirc;n phong c&aacute;ch khỏe khoắn ng&agrave;y h&egrave;.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25b820ec6.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Kiểu d&aacute;ng rộng r&atilde;i, thoải m&aacute;i-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25b92453c.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Dễ kết hợp trang phục-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25ba440ce.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Nhiều m&agrave;u cho bạn lựa chọn-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25bbac0e5.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Đặt Mua ngay bạn nh&eacute;-<\/strong><\/p>  <\/div><\/div>",
  "color": [
    "white",
    "black"
  ],
  "size": "",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d25b21410e.jpg",
    "public\/images\/products\/product-537d25b269f1d.jpg",
    "public\/images\/products\/product-537d25b2c3628.jpg",
    "public\/images\/products\/product-537d25b330615.jpg",
    "public\/images\/products\/product-537d25b38d501.jpg"
  ],
  "price": NumberInt(180000),
  "special_price": NumberInt(109000),
  "special_from_date": NumberInt(1400710616),
  "special_to_date": NumberInt(1400710616),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(41),
  "category": [
    NumberInt(5)
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:16:56.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d262e968384141300002f"),
  "name": "Áo sơ mi trơn chất mát VNXK-HL",
  "code": "CR_55821",
  "slug": "ao-so-mi-tron-chat-mat-vnxk-hl",
  "status": "1",
  "short_description": "<p><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- &Aacute;o sơ mi trơn chất m&aacute;t VNXK-HL kiểu d&aacute;ng trẻ trung, tinh tế cho người mặc.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Thiết kế &aacute;o d&agrave;i tay, cổ đức truyền thống rất ph&ugrave; hợp cho nam giới.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- &Aacute;o c&oacute; những đường cắt c&uacute;p đẹp mắt.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Dễ kết hợp với c&aacute;c trang phục kh&aacute;c nhau.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- C&oacute; size &aacute;o theo form chuẩn cho bạn lựa chọn.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><strong style=\"font-family: arial; font-size: 14px; text-align: justify;\">Th&ocirc;ng tin sản phẩm:&nbsp;<\/strong><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Xuất xứ: Việt Nam<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Chất liệu: vải sợi cotton thấm h&uacute;t mồ h&ocirc;i rất tốt.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- K&iacute;ch cỡ: M, L, XL<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi trơn chất m&aacute;t VNXK-HL<\/h2>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Mang tới cho những ch&agrave;ng trai trẻ một mẫu &aacute;o sơ mi rất trẻ trung v&agrave; tạo n&ecirc;n cho họ một phong c&aacute;ch năng động, lịch l&atilde;m nhất hiện nay đ&oacute; ch&iacute;nh l&agrave; sản phẩm &Aacute;o sơ mi trơn chất m&aacute;t VNXK-HL. Với chiếc &aacute;o n&agrave;y, c&aacute;c bạn nam c&oacute; thể mặc đi học, đi l&agrave;m, dự tiệc&hellip;. đều ph&ugrave; hợp.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 700px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25feeb8cd.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- &Aacute;o sơ mi trơn chất m&aacute;t VNXK HL cho nam kiểu d&aacute;ng thời trang, hiện đại -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d25ffa10a0.jpg\" alt=\"&Aacute;o sơ mi trơn chất m&aacute;t VNXK HL 02\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Thiết kế form &aacute;o chuẩn, vừa vặn với nhiều v&oacute;c d&aacute;ng cơ thể -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d260029d40.jpg\" alt=\"&Aacute;o sơ mi trơn chất m&aacute;t VNXK HL 03\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Tinh tế, chỉn chu trong từng đường may-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Kh&ocirc;ng qu&aacute; k&eacute;n chọn người mặc bởi &aacute;o được thiết kế theo form chuẩn 3 size S, M, L ph&ugrave; hợp với nhiều v&oacute;c d&aacute;ng cơ thể. &Aacute;o được may từ chất liệu vải sợi cotton m&aacute;t v&agrave; mềm mại n&ecirc;n rất thoải m&aacute;i cho người mặc.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 700px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2600bc7fb.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Bạn cũng c&oacute; thể mặc su&ocirc;ng &aacute;o cũng kh&ocirc;ng l&agrave;m mất đi vẻ lịch sự của m&igrave;nh đ&acirc;u -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 700px; height: 700px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d260146a84.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Ph&ugrave; hợp với nhiều ho&agrave;n cảnh kh&aacute;c nhau -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Kh&ocirc;ng cầu k&igrave; họa tiết, dễ mặc với một m&agrave;u duy nhất, kiểu d&aacute;ng &aacute;o sơ mi trơn sẽ gi&uacute;p bạn th&ecirc;m lịch l&atilde;m khi kết hợp c&ugrave;ng quần &acirc;u, gi&agrave;y da hay cũng sẽ khiến bạn trẻ trung hơn khi kết hợp c&ugrave;ng quần kaki, Jeans sẫm m&agrave;u gi&agrave;y thể thao. Chắc chắn bạn sẽ lu&ocirc;n h&agrave;i l&ograve;ng với vẻ bề ngo&agrave;i của m&igrave;nh đ&oacute;.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <\/div><\/div>",
  "color": [
    "white"
  ],
  "size": "M, L, XL",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d25fdd3ac6.jpg",
    "public\/images\/products\/product-537d25fe385a1.jpg",
    "public\/images\/products\/product-537d25fe82ee4.jpg"
  ],
  "price": NumberInt(260000),
  "special_price": NumberInt(138000),
  "special_from_date": NumberInt(1399241902),
  "special_to_date": NumberInt(1401229102),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(33),
  "category": [
    NumberInt(4),
    NumberInt(12)
  ],
  "related_products": [
    "537d2113968384f40600002a",
    "537cda9d968384480c00002c",
    "53478ae19683846818000029",
    "53477bd09683847018000029"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:18:22.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d26779683841413000030"),
  "name": "Áo sơ mi dài tay NINOFA MS1-HL",
  "code": "CR_55813",
  "slug": "ao-so-mi-dai-tay-ninofa-ms1-hl",
  "status": "1",
  "short_description": "<p><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- &Aacute;o sơ mi d&agrave;i tay NINOFA MS1-HL l&agrave; sản phẩm thời trang VNXK cao cấp, kiểu d&aacute;ng trẻ trung, tinh tế v&agrave; hiện đại cho người mặc.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- &Aacute;o được thiết kế theo phong c&aacute;ch thời trang c&ocirc;ng sở gi&uacute;p người mặc lu&ocirc;n thoải m&aacute;i&nbsp; m&agrave; rất lịch sự.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Kiểu d&aacute;ng &aacute;o theo form chuẩn truyền thống. Kh&ocirc;ng qu&aacute; k&eacute;n chọn người mặc, rất dễ phối đồ trong nhiều ho&agrave;n cảnh.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- M&agrave;u trắng trẻ trung, ph&ugrave; hợp với mọi người.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Chất vải sợi cotton m&aacute;t, mềm mại, v&agrave;o form chuẩn.<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><strong style=\"font-family: arial; font-size: 14px; text-align: justify;\">Th&ocirc;ng tin sản phẩm:<\/strong><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Xuất xứ: Việt Nam<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- Chất liệu: vải sợi cotton<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- M&agrave;u sắc: đỏ<\/span><br style=\"font-family: arial; font-size: 14px; text-align: justify;\" \/><span style=\"font-family: arial; font-size: 14px; text-align: justify;\">- K&iacute;ch cỡ: S, M, L<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi d&agrave;i tay NINOFA MS1-HL<\/h2>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Những chiếc &aacute;o sơ mi lu&ocirc;n l&agrave; người bạn đồng h&agrave;nh trong cuộc sống của ph&aacute;i mạnh bởi n&oacute; l&agrave; h&igrave;nh ảnh biểu trưng của phong c&aacute;ch lịch l&atilde;m, đẳng cấp v&agrave; rất chuẩn men. Nếu như, ng&agrave;y nay nam giới c&oacute; xu hướng lựa chọn cho m&igrave;nh những mẫu sơ mi c&aacute;ch t&acirc;n, phối m&agrave;u để l&agrave;m bật l&ecirc;n n&eacute;t c&aacute; t&iacute;nh của họ th&igrave; chiếc &Aacute;o sơ mi d&agrave;i tay Ninofa ms1 HL ch&iacute;nh l&agrave; sự lựa chọn ho&agrave;n hảo cho bạn.<\/span><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 600px; height: 900px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d265842678.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- &Aacute;o sơ mi d&agrave;i tay ninofa Ms1 HL&nbsp; kiểu d&aacute;ng thời trang, cao cấp cho ph&aacute;i mạnh -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2658cf762.jpg\" alt=\"&Aacute;o sơ mi d&agrave;i tay Ninofa MS1 HL 02\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- Kiểu d&aacute;ng &aacute;o &ocirc;m d&aacute;ng, t&ocirc;n n&eacute;t khỏe khoắn của ph&aacute;i mạnh -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d26599ce0e.jpg\" alt=\"&Aacute;o sơ mi d&agrave;i tay Ninofa MS1 HL 03\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>- M&agrave;u sắc nổi bật, tinh tế -<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 600px; height: 900px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d265a3a14d.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">&Aacute;o được thiết kế theo form chuẩn của phong c&aacute;ch thời trang d&agrave;nh cho nam giới đ&oacute; l&agrave; cổ đức, tay d&agrave;i, &aacute;o &ocirc;m nhẹ đặc biệt l&agrave; &aacute;o được thiết kế tr&ecirc;n nền vải đỏ sẽ rất ph&ugrave; hợp cho những ai th&iacute;ch phong c&aacute;ch Color Block.<\/span><\/p>  <p style=\"text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" style=\"width: 600px; height: 900px;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d265ab4f44.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 14px;\">Đừng để những chiếc &aacute;o sơ mi khiến m&igrave;nh trở n&ecirc;n nh&agrave;m ch&aacute;n v&agrave; rập khu&ocirc;n bạn nh&eacute;. Thay đổi một ch&uacute;t c&ugrave;ng m&agrave;u sắc tươi s&aacute;ng sẽ gi&uacute;p bạn th&ecirc;m tự tin v&agrave;o ch&iacute;nh m&igrave;nh đấy. <\/span><\/p>  <\/div><\/div>",
  "color": [
    "red"
  ],
  "size": "M,L,S",
  "hot": "0",
  "image": [
    "public\/images\/products\/product-537d26577a09b.jpg",
    "public\/images\/products\/product-537d2657cbf80.jpg"
  ],
  "price": NumberInt(260000),
  "special_price": NumberInt(138000),
  "special_from_date": NumberInt(1400710775),
  "special_to_date": NumberInt(1400710775),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(20),
  "category": [
    NumberInt(4)
  ],
  "related_products": [
    "537d262e968384141300002f",
    "537d25d8968384141300002e"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:19:41.0Z"),
  "created_at": ISODate("2014-05-21T22:19:35.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d2ea1968384480c000031"),
  "name": "Áo sơ mi nam dài tay made in Việt Nam",
  "code": "CR_34566",
  "slug": "ao-so-mi-nam-dai-tay-made-in-viet-nam",
  "status": "1",
  "short_description": "<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Kiểu d&aacute;ng trẻ trung, lịch l&atilde;m m&agrave; vẫn trẻ trung<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- D&aacute;ng &aacute;o được thiết kế theo form hiện đại, &ocirc;m người mang lại vẻ thời trang, s&agrave;nh điệu cho người mặc.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Họa tiết kẻ sọc nhỏ đơn giản nhưng tinh tế v&agrave; thời trang<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Đường may chắc chắn, cẩn thận, tạo cho bạn cảm gi&aacute;c thoải m&aacute;i.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu vải tho&aacute;ng m&aacute;t, tạo cảm gi&aacute;c dễ chịu tối đa khi mặc.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Th&iacute;ch hợp cho c&aacute;c doanh nh&acirc;n, nh&acirc;n vi&ecirc;n văn ph&ograve;ng v&agrave; cả những bạn trẻ c&aacute; t&iacute;nh.<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Xuất xứ: Việt Nam<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- M&agrave;u sắc: trắng xanh<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- &Aacute;o freesize ph&ugrave; hợp với bạn trai dưới 73 kg.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5; text-align: justify;\"><span style=\"font-family: Calibri; font-size: 15px; vertical-align: baseline; white-space: pre-wrap;\">- Chất liệu: vải th&ocirc;.<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o sơ mi nam d&agrave;i tay made in Việt Nam<\/h2>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7d5e472.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-&Aacute;o sơ mi nam d&agrave;i tay made in Việt Nam-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16e2-2c6e-3a06-a9e81772f3de\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">&Aacute;o sơ mi l&agrave; loại trang phục rất quen thuộc đối với c&aacute;c bạn nam. Bạn c&oacute; thể mặc ch&uacute;ng v&agrave;o nhiều dịp kh&aacute;c nhau như những l&uacute;c đi l&agrave;m, đi học, đi chơi&hellip; V&agrave; nếu biến tấu một ch&uacute;t, bạn c&oacute; thể kết hợp những chiếc &aacute;o sơ mi với &aacute;o thun b&ecirc;n trong, tạo n&ecirc;n một phong c&aacute;ch mạnh mẽ, trẻ trung.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7db1721.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Kiểu d&aacute;ng lịch l&atilde;m-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16e2-2c6e-3a06-a9e81772f3de\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">&Aacute;o sơ mi nam d&agrave;i tay made in Việt Nam m&agrave; Cucre mang đến cho bạn h&ocirc;m nay với d&aacute;ng body &ocirc;m th&acirc;n, kh&ocirc;ng những gi&uacute;p qu&yacute; &ocirc;ng kh&eacute;o l&eacute;o khoe được n&eacute;t đẹp h&igrave;nh thể đ&agrave;n &ocirc;ng khỏe khoắn m&agrave; c&ograve;n t&ocirc;n th&ecirc;m n&eacute;t đẹp thanh lịch v&agrave; rất sang trọng. <\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7e202a2.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Chất liệu vải th&ocirc; tho&aacute;ng m&aacute;t, thấm h&uacute;t mồ h&ocirc;i-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16e2-2c6e-3a06-a9e81772f3de\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Với kiểu d&aacute;ng &aacute;o thiết kế đơn giản nhưng rất tinh tế v&agrave; ấn tượng ở từng chi tiết &aacute;o: Đường chỉ may đẹp, chắc chắc, những họa tiết như c&uacute;c &aacute;o, đường may tạo g&acirc;n&hellip; đều l&agrave; điểm nhấn hết sức ấn tượng, độc đ&aacute;o.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" style=\"font-size: 12px; text-align: center;\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7eaa250.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Đường may tinh tế, kh&eacute;o l&eacute;o-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\"><span id=\"docs-internal-guid--fd7e4f3-16e2-2c6e-3a06-a9e81772f3de\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; vertical-align: baseline; white-space: pre-wrap;\">Kết hợp kh&eacute;o l&eacute;o với với một bộ đồ quần &acirc;u hay bộ vest sẽ gi&uacute;p bạn thay đổi h&igrave;nh ảnh ho&agrave;n to&agrave;n mới cho bản th&acirc;n m&igrave;nh, trở th&agrave;nh một qu&yacute; &ocirc;ng điển trai, thanh t&uacute; v&agrave; đầy sức l&ocirc;i cuốn trong mắt tất cả mọi người mỗi khi xuất hiện.<\/span><\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: justify;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7f1319c.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-M&agrave;u sắc trang nh&atilde;, thanh lịch-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7f81cb2.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Dễ kết hợp c&ugrave;ng quần jean, quần &acirc;u hay quần th&ocirc;-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;&nbsp;<img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2e7febd93.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Đặt Mua ngay bạn nh&eacute;-<\/strong><\/p>  <\/div><\/div>",
  "color": [
    "white"
  ],
  "size": "FreeSize",
  "hot": "1",
  "image": [
    "public\/images\/products\/product-537d2e7bbaeea.jpg",
    "public\/images\/products\/product-537d2e7c0dfa8.jpg",
    "public\/images\/products\/product-537d2e7c6d97c.jpg",
    "public\/images\/products\/product-537d2e7cd1b52.jpg"
  ],
  "price": NumberInt(190000),
  "special_price": NumberInt(95000),
  "special_from_date": NumberInt(1400712865),
  "special_to_date": NumberInt(1400712865),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(33),
  "category": [
    NumberInt(4),
    NumberInt(12)
  ],
  "related_products": [
    "537d26779683841413000030",
    "537d262e968384141300002f",
    "534845f8968384781800002e"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:55:32.0Z"),
  "created_at": ISODate("2014-05-21T22:54:25.0Z")
});
db.getCollection("products").insert({
  "_id": ObjectId("537d2edb9683844c1e00002d"),
  "name": "Áo thun cổ tròn Bill, made in Việt Nam",
  "code": "CR_20694",
  "slug": "ao-thun-co-tron-bill-made-in-viet-nam",
  "status": "1",
  "short_description": "<p id=\"docs-internal-guid--d4d368b-1bcc-0b7d-59fc-9ee14facd06b\" dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Kiểu d&aacute;ng cổ tr&ograve;n đơn giản, form &aacute;o cực chuẩn, &ocirc;m nhẹ nh&agrave;ng, tăng th&ecirc;m n&eacute;t khỏe khoắn, nam t&iacute;nh.<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Dễ giặt, kh&ocirc;ng phai m&agrave;u hay bị co r&uacute;t sợi vải<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc nh&atilde; nhặn, h&agrave;i h&ograve;a<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Dễ kết hợp trang phục<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Thoải m&aacute;i cho c&aacute;c bạn nam mặc trong nhiều ho&agrave;n cảnh, từ đi học, đi chơi hay đi l&agrave;m&hellip;<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; font-weight: bold; vertical-align: baseline;\">Chi tiết sản phẩm:<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Xuất xứ: Trung quốc<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- Chất liệu thun cotton, co gi&atilde;n 4 chiều, m&aacute;t lạnh, mềm mại<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- K&iacute;ch cỡ: free size ph&ugrave; hợp bạn trai dưới 70kg<\/span><\/p>\r\n<p dir=\"ltr\" style=\"font-family: arial; margin: 0pt 0px; padding: 0px; font-size: 14px; line-height: 1.5;\"><span style=\"font-family: Calibri; font-size: 15px; background-color: transparent; vertical-align: baseline;\">- M&agrave;u sắc: đỏ, xanh<\/span><\/p>",
  "description": "<div id=\"fucking\"><div class=\"description\">  <h2 style=\"font-size: 15px; overflow: hidden; margin-bottom: 10px;\">Th&ocirc;ng tin chi tiết- &Aacute;o thun cổ tr&ograve;n Bill, made in Việt Nam<\/h2>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2eb05a2be.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-&Aacute;o thun l&agrave; trang phục được c&aacute;c bạn ưa chuộng v&agrave;o m&ugrave;a h&egrave;-<\/strong><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p id=\"docs-internal-guid--d4d368b-1bc5-987f-7321-73c2850d5c35\" dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Ng&agrave;y nay với xu hướng x&atilde; hội thay đổi, kh&ocirc;ng phải chỉ c&oacute; nữ giới mới c&oacute; nhu cầu thời trang m&agrave; ngay cả nam giới cũng cần phải thay đổi để l&agrave;m m&igrave;nh trẻ trung v&agrave; hiện đại. C&oacute; nhiều c&aacute;ch l&agrave;m đẹp nhưng quan trọng v&agrave; được ch&uacute; &yacute; hơn cả vẫn l&agrave; những bộ trang phục bắt mắt, hợp thời trang. <\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2eb0b877f.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-&Aacute;o thun cổ tr&ograve;n Bill, made in Việt Nam-<\/strong><\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Kh&ocirc;ng giống như thời trang nữ giới lu&ocirc;n thay đổi v&agrave; biến h&oacute;a theo m&ugrave;a, thời trang nam c&oacute; lu&ocirc;n giữ sự ổn định trong những kiểu d&aacute;ng, c&oacute; chăng chỉ l&agrave; điểm th&ecirc;m v&agrave;i n&eacute;t chấm ph&aacute; c&aacute;ch điệu v&agrave; &Aacute;o thun cổ tr&ograve;n Bill, made in Việt Nam l&agrave; một trong những kiểu d&aacute;ng đại diện cho đặc t&iacute;nh đ&oacute;. <\/span><\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2eb121e22.jpg\" alt=\"\" \/><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\">&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><strong>-Phối m&agrave;u nh&atilde; nhặn, tinh tế-<\/strong><\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">&Aacute;o thun cổ tr&ograve;n l&agrave; loại trang phục rất quen thuộc đối với c&aacute;c bạn nam. Bạn c&oacute; thể mặc ch&uacute;ng v&agrave;o nhiều dịp kh&aacute;c nhau như những l&uacute;c đi l&agrave;m, đi học, đi chơi&hellip; l&agrave; trang phục tuyệt vời nhất để kết hợp c&ugrave;ng quần jean, đem lại cho bạn sự thoải m&aacute;i tiện dụng trong mọi hoạt động. Chất liệu vải tho&aacute;ng m&aacute;t, dễ thấm h&uacute;t mồ h&ocirc;i, th&iacute;ch hợp với thời tiết nắng n&oacute;ng của m&ugrave;a h&egrave;.<\/span><\/p>  <p>&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2eb18baee.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Thiết kế &ocirc;m s&aacute;t t&ocirc;n d&aacute;ng nhưng vẫn mang đến cảm gi&aacute;c thoải m&aacute;i-<\/strong><\/p>  <p>&nbsp;<\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">&Aacute;o thun cổ tr&ograve;n made in Việt nam đem lại vẻ đẹp trẻ trung, thanh lịch cho c&aacute;c bạn trai. Với thiết kế đơn giản, sử dụng chất liệu thun cotton tho&aacute;ng m&aacute;t, &aacute;o thun cổ tim thời trang sẽ gi&uacute;p t&ocirc;n l&ecirc;n v&oacute;c d&aacute;ng khỏe mạnh, cường tr&aacute;ng v&agrave; th&acirc;n h&igrave;nh đẹp của ph&aacute;i mạnh. <\/span><\/p>  <p dir=\"ltr\" style=\"line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2eb1ed94a.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Chất liệu cotton co gi&atilde;n, thấm h&uacute;t mồ h&ocirc;i-<\/strong><\/p>  <p>&nbsp;<\/p>  <p style=\"text-align: center;\"><img class=\"img-responsive\" src=\"..\/..\/..\/public\/file-manager\/source\/product-537d2eb25b791.jpg\" alt=\"\" \/><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: center;\"><strong>-Mang đến cho ch&agrave;ng phong c&aacute;ch trẻ trung, năng động v&agrave; khỏe khoắn-<\/strong><\/p>  <p style=\"text-align: center;\">&nbsp;<\/p>  <p style=\"text-align: justify;\"><span style=\"font-size: 15px; font-family: Calibri; color: #000000; background-color: transparent; font-weight: normal; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Đặt mua ngay bạn nh&eacute;!<\/span><\/p>  <\/div><\/div>",
  "color": [
    "red",
    "blue"
  ],
  "size": "FreeSize",
  "hot": "1",
  "image": [
    "public\/images\/products\/product-537d2ead168a5.jpg",
    "public\/images\/products\/product-537d2eaee4d4b.jpg",
    "public\/images\/products\/product-537d2eafe0982.jpg"
  ],
  "price": NumberInt(150000),
  "special_price": NumberInt(85000),
  "special_from_date": NumberInt(1396306523),
  "special_to_date": NumberInt(1401231323),
  "groupAttribute": {
    "id": "530f6f5b968384680c000029",
    "name": "Mặc định"
  },
  "quantity": NumberInt(10),
  "category": [
    NumberInt(5)
  ],
  "related_products": [
    "537d2ea1968384480c000031",
    "537d26779683841413000030",
    "537d262e968384141300002f",
    "537d25d8968384141300002e"
  ],
  "stock": NumberInt(1),
  "updated_at": ISODate("2014-05-21T22:55:32.0Z"),
  "created_at": ISODate("2014-05-21T22:55:23.0Z")
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project.attribute",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "code": NumberInt(1)
  },
  "ns": "project.attribute",
  "name": "code_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project.attribute_group",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "group_name": NumberInt(1)
  },
  "ns": "project.attribute_group",
  "name": "group_name_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "group_attributes": NumberInt(1)
  },
  "ns": "project.attribute_group",
  "name": "group_attributes_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project.products",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "slug": NumberInt(1)
  },
  "ns": "project.products",
  "name": "slug_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project.cart",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "user_id": NumberInt(1)
  },
  "ns": "project.cart",
  "name": "user_id_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "product_id": NumberInt(1)
  },
  "ns": "project.cart",
  "name": "product_id_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "session_id": NumberInt(1)
  },
  "ns": "project.cart",
  "name": "session_id_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project.favorite",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "product_id": NumberInt(1)
  },
  "ns": "project.favorite",
  "name": "product_id_1"
});
