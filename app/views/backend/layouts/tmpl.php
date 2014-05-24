<script id="tmpl-comment" type="text/x-jquery-tmpl">
    <tr>
        <td><a href="${$item.link(order_id)}">${$item.code(order_id)}</a></td>
        <td>{{html $item.content(content) }}</td>
        <td>${$item.dateFormat(created_at)}</td>
    </tr>
</script>
<script id="tmpl-contact" type="text/x-jquery-tmpl">
    <tr>
        <td><a href="${$item.link(id)}">${$item.title(title)}</a></td>
        <td>${$item.dateFormat(created_at)}</td>
    </tr>
</script>
<script id="tmpl-related-products" type="text/x-jquery-tmpl">
    <tr>
        <td class="table_checkbox"><input type="checkbox" name="related_products[]" value="${_id }" ${$item.checked(_id)} ></td>
        <td class="text-center">${code}</td>
        <td>${name}</td>
        <td>${groupAttribute['name'] }</td>
        <td>${$item.status(status)}</td>
        <td>${$item.price(price)}</td>
    </tr>
</script>

<script id="tmpl-images-upload" type="text/x-jquery-tmpl">
<li class="span3">
    <a title="${name}" class="thumbnail">
        <img src="${image}" alt="" style="width: 260px; height:180px;" />
    </a>
</li>
</script>