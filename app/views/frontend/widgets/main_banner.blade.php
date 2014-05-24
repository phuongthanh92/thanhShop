<ul id="SliderContainer" style="position: relative;">
    @foreach($banners as $banner)
    <li class="tran0">
        <a title="Christmas Store" href="{{ $banner->link }}">
            <img src="{{ $banner->image }}" class="img-responsive" alt="{{ $banner->title }}" title="{{ $banner->title }}"/>
        </a>
    </li>
    @endforeach
</ul>