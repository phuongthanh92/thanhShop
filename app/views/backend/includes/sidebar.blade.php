<div class="sidebar">
    <div class="antiScroll">
        <div class="antiscroll-inner">
            <div class="antiscroll-content">
                <div class="sidebar_inner">
                    <form action="" class="input-append" method="post" >
                    </form>
                    <div id="side_accordion" class="accordion">
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a href="#collapseThree" data-parent="#side_accordion" data-toggle="collapse" class="accordion-toggle">
                                    <i class="icon-user"></i> Quản lý thành viên
                                </a>
                            </div>
                            <div class="accordion-body collapse" id="collapseThree">
                                <div class="accordion-inner">
                                    <ul class="nav nav-list">
                                        <li>{{ link_to_action('AdminUserController@getIndex','Danh sách thành viên') }}</li>
                                        <li>{{ link_to_action('AdminUserController@getCreate','Thêm thành viên') }}</li>
                                        <li>{{ link_to_action('AdminPermissionController@getIndex','Nhóm quyền') }}</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a href="#collapseTwo" data-parent="#side_accordion" data-toggle="collapse" class="accordion-toggle">
                                    <i class="icon-th"></i> Quản lý bài viết
                                </a>
                            </div>
                            <div class="accordion-body collapse" id="collapseTwo">
                                <div class="accordion-inner">
                                    <ul class="nav nav-list">
                                        <li>{{ link_to_action('AdminArticlesController@getIndex','Danh sách bài viết') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a href="#collapseFour" data-parent="#side_accordion" data-toggle="collapse" class="accordion-toggle">
                                    <i class="icon-cog"></i> Cấu hình website
                                </a>
                            </div>
                            <div class="accordion-body collapse" id="collapseFour">
                                <div class="accordion-inner">
                                    <ul class="nav nav-list">
                                        <li>{{ link_to_action('AdminSettingController@getIndex','Thông tin website') }}</li>
                                        <li>{{ link_to_action('AdminSlideController@getIndex','Quản lý slide') }}</li>
                                        <li>{{ link_to_action('AdminBannerController@getIndex','Quản lý banner') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="push"></div>
                </div>
                <div class="sidebar_info">
                    @widget_admin_sidebar
                </div>
            </div>
        </div>
    </div>
</div>