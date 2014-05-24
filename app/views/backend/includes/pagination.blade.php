<div class="pagination pagination-right">
    @if(isset($pagination) && $pagination->getTotal() > 1)
    <ul>
        @if($pagination->getCurrentPage() > 1)
        <li><a href="?page=1">{{ Lang::get('pagination.first') }}</a></li>
        <li><a href="?page={{$pagination->getCurrentPage()-1}}">{{ Lang::get('pagination.previous') }}</a></li>
        @else
        <li class="disabled"><span>{{ Lang::get('pagination.first') }}</span></li>
        <li class="disabled"><span>{{ Lang::get('pagination.previous') }}</span></li>
        @endif
        @if($pagination->getLastPage() > 20 )
            @for ($i = 1; $i < 4 ; $i++)
                @if($i == $pagination->getCurrentPage())
                <li class="active"><span>{{ $i }}</span></li>
                @else
                <li><a href="?page={{$i}}">{{ $i }}</a></li>
                @endif
            @endfor

            @if($pagination->getCurrentPage() > 7 )
                <li class="active"><span>....</span></li>
            @endif

            @for ($i = $pagination->getCurrentPage() - 3 ; $i <= $pagination->getCurrentPage() + 3 ; $i++)
                @if($i>=4 && $i <= ($pagination->getLastPage() - 3))
                    @if($i == $pagination->getCurrentPage())
                    <li class="active"><span>{{ $i }}</span></li>
                    @else
                    <li><a href="?page={{$i}}">{{ $i }}</a></li>
                    @endif
                @endif
            @endfor

            @if($pagination->getCurrentPage() < $pagination->getLastPage() -6 )
            <li class="active"><span>....</span></li>
            @endif

            @for ($i = $pagination->getLastPage() -2; $i <= $pagination->getLastPage(); $i++)
            @if($i == $pagination->getCurrentPage())
            <li class="active"><span>{{ $i }}</span></li>
            @else
            <li><a href="?page={{$i}}">{{ $i }}</a></li>
            @endif
            @endfor
        @else
            @for ($i = 1; $i <= $pagination->getLastPage(); $i++)
                @if($i == $pagination->getCurrentPage())
                <li class="active"><span>{{ $i }}</span></li>
                @else
                <li><a href="?page={{$i}}">{{ $i }}</a></li>
                @endif
            @endfor
        @endif
        @if($pagination->getCurrentPage() < $pagination->getLastPage())
        <li><a href="?page={{$pagination->getCurrentPage()+1}}">{{ Lang::get('pagination.next') }}</a></li>
        <li><a href="?page={{$pagination->getLastPage()}}">{{ Lang::get('pagination.last') }}</a></li>
        @else
        <li class="disabled"><span>{{ Lang::get('pagination.next') }}</span></li>
        <li class="disabled"><span>{{ Lang::get('pagination.last') }}</span></li>
        @endif
    </ul>
    @endif
</div>
