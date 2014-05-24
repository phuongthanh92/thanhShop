<div class="personal">
    <div class="tittle-box">
        Tài khoản
    </div>
    <div class="content-box">
        <ul class="list-unstyled">
            <li>{{ link_to_action('CustomerController@getProfile', 'Thông tin cá nhân') }} </li>
            <li>{{ link_to_action('CustomerController@getChangePassword', 'Đổi mật khẩu') }} </li>
            <li>{{ link_to_action('CustomerController@getAddress', 'Sổ địa chỉ') }} </li>
            <li>{{ link_to_action('OrderController@getIndex', 'Lịch sử mua hàng') }} </li>
            <li>{{ link_to_action('FavoriteController@getIndex', 'Sản phẩm yêu thích') }} </li>
        </ul>
    </div>
</div>