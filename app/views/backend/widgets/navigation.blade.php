<div class="navbar navbar-fixed-top" id="nav-bar-top">
    <div class="navbar-inner">
        <div class="container-fluid">
            <a class="brand" id="dashboard" href="{{ action('AdminDashboardController@getIndex') }}"><i class="icon-home icon-white"></i> {{ $home }}</a>
            <ul class="nav user_menu pull-right">
                <li class="hidden-phone hidden-tablet">
                    <div class="nb_boxes clearfix">
                        <a data-toggle="modal" data-backdrop="static" href="#myMail" class="label ttip_b" title="Liên hệ"> <span id="total-contact"></span> <i class="splashy-mail_light"></i></a>
                        <a data-toggle="modal" data-backdrop="static" href="#myComments" class="label ttip_b" title="Bình luận đơn hàng"> <span id="total-comment"></span> <i class="splashy-comment"></i></a>
                    </div>
                </li>
                <li class="divider-vertical hidden-phone hidden-tablet"></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="{{ $full_name }}">
                        {{ $user }}
                        <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>{{ link_to_action('AdminUserController@getProfile', 'Hồ sơ của tôi') }}</li>
                        <li>{{ link_to_action('AdminUserController@postChangePassword', 'Đổi mật khẩu') }}</li>
                        <li class="divider"></li>
                        <li>{{ link_to_action('AdminUserController@getLogout', 'Thoát', array(), array('class' => 'ext_disabled')) }}</li>

                    </ul>
                </li>
            </ul>
            <a data-target=".nav-collapse" data-toggle="collapse" class="btn_menu">
                <span class="icon-align-justify icon-white">\</span>
            </a>
            <nav>
                <div class="nav-collapse">
                    <ul class="nav">
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-list-alt icon-white"></i> Kinh doanh <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>{{ link_to_action('AdminOrderController@getIndex', 'Đơn hàng') }}</li>
<!--                                <li>{{ link_to_action('AdminOrderController@getIndex', 'Hoá đơn') }}</li>-->
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-th icon-white"></i> Danh mục <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>{{ link_to_action('AdminProductController@getIndex', 'Quản lý sản phẩm') }}</li>
                                <li>{{ link_to_action('AdminCategoriesController@getIndex', 'Quản lý danh mục') }}</li>
                                <li>{{ link_to_action('AdminAttGroupController@getIndex', 'Quản lý nhóm thuộc tính') }}</li>
                                <li>{{ link_to_action('AdminAttributeController@getIndex', 'Quản lý thuộc tính') }}</li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class=" icon-th-large icon-white"></i> Khách hàng <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>{{ link_to_action('AdminCustomerController@getIndex','Quản lý khách hàng') }}</li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-file icon-white"></i> Thống kê <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>{{ link_to_action('AdminStatisticController@getOrder','Kinh doanh') }}</li>
                                <li>{{ link_to_action('AdminStatisticController@getProduct','Sản phẩm bán chạy') }}</li>
<!--                                <li>{{ link_to_action('AdminStatisticController@getCustomer','Khách hàng') }}</li>-->
                            </ul>
                        </li>
                        <li>
                            <a href="{{ action('AdminContactController@getIndex') }}"><i class="icon-inbox icon-white"></i> Liên hệ </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
<div class="modal hide fade" id="myMail">
    <div class="modal-header">
        <button class="close" data-dismiss="modal">×</button>
        <h3>Các ý kiến của khách hàng</h3>
    </div>
    <div class="modal-body">
        <table class="table table-condensed table-striped" data-provides="rowlink" style="display: none">
            <thead>
            <tr>
                <th>Tiêu đề</th>
                <th>Thời gian</th>
            </tr>
            </thead>
            <tbody id="listContact">
            </tbody>
        </table>
        <div class="alert alert-info" style="display: none">Không có ý kiến mới.</div>
    </div>
    <div class="modal-footer">
        <a href="{{ action('AdminContactController@getIndex') }}" class="btn">Đi đến quản lý ý kiến khách hàng</a>
    </div>
</div>
<div class="modal hide fade" id="myComments">
    <div class="modal-header">
        <button class="close" data-dismiss="modal">×</button>
        <h3>Các bình luận mới</h3>
    </div>
    <div class="modal-body">
        <div class="alert alert-info" style="display: none">Không có bình luận mới nào.</div>
        <table class="table table-condensed table-striped" data-provides="rowlink"  style="display: none">
            <thead>
            <tr>
                <th>Đơn hàng</th>
                <th>Nội dung</th>
                <th>Thời gian</th>
            </tr>
            </thead>
            <tbody id="listComment">
            </tbody>
        </table>
    </div>
    <div class="modal-footer">
        <a href="{{ action('AdminOrderController@getIndex') }}" class="btn">Đi đến đơn hàng</a>
    </div>
</div>