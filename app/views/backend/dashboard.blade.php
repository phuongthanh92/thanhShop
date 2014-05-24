@extends('backend.layouts.default')
@section('scripts')
{{HTML::script('public/lib/flot/jquery.flot.min.js')}}
{{HTML::script('public/lib/flot/jquery.flot.resize.min.js')}}
{{HTML::script('public/lib/flot/jquery.flot.pie.min.js')}}
{{HTML::script('public/lib/flot/jquery.flot.curvedLines.min.js')}}
{{HTML::script('public/lib/flot/jquery.flot.orderBars.min.js')}}
{{HTML::script('public/lib/flot/jquery.flot.multihighlight.min.js')}}
{{HTML::script('public/lib/flot/jquery.flot.pyramid.min.js')}}
{{HTML::script('public/lib/moment_js/moment.min.js')}}
<script type="text/javascript">
    jQuery(document).ready(function() {
        jQuery('#accordion').accordion({autoHeight: false});

    var flash = [<?php for($i=0;$i<count($dateprev);$i++){ ?>[{{strtotime($dateprev[$i])}}000, {{$dataOrder[$i]}}],<?php }?>];


    var flash1 = [<?php for($i=0;$i<count($dateprev15);$i++){ ?>[{{strtotime($dateprev15[$i])}}000, {{$dataOrder15[$i]}}],<?php }?>];


    var flash2 = [<?php for($i=0;$i<count($dateprev30);$i++){ ?>[{{strtotime($dateprev30[$i])}}000, {{$dataOrder30[$i]}}],<?php }?>];


    function showTooltip(x, y, contents) {
        jQuery('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5
        }).appendTo("body").fadeIn(200);
    }
    var plot = jQuery.plot(jQuery("#chartplace"),
        [{data: flash, label: "Đơn hàng", color: "#069"}], {
            series: {
                lines: {show: true, fill: true, fillColor: {colors: [{opacity: 0.05}, {opacity: 0.15}]}},
                points: {show: true}
            },
            legend: {position: 'nw'},
            grid: {hoverable: true, clickable: true, borderColor: '#ccc', borderWidth: 1, labelMargin: 10},
            xaxis: {mode: "time", timeformat: "%d/%m/%y"},
            yaxis: {min: 0}
        });
    var previousPoint = null;
    jQuery("#chartplace").bind("plothover", function(event, pos, item) {
        jQuery("#x").text(pos.x.toFixed(2));
        jQuery("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                jQuery("#tooltip").remove();
                var x = '{{Lang::get('backend/home.months')}}' + item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);

                showTooltip(item.pageX, item.pageY,
                    item.series.label + " : " + y);
            }

        } else {
            jQuery("#tooltip").remove();
            previousPoint = null;
        }

    });

    jQuery("#chartplace").bind("plotclick", function(event, pos, item) {
        if (item) {
            jQuery("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });

    var plot = jQuery.plot(jQuery("#chartplace1"),
        [{data: flash1, label: "Đơn hàng", color: "#069"}], {
            series: {
                lines: {show: true, fill: true, fillColor: {colors: [{opacity: 0.05}, {opacity: 0.15}]}},
                points: {show: true}
            },
            legend: {position: 'nw'},
            grid: {hoverable: true, clickable: true, borderColor: '#ccc', borderWidth: 1, labelMargin: 10},
            xaxis: {mode: "time", timeformat: "%d/%m/%y"},
            yaxis: {min: 0}
        });

    var previousPoint = null;
    jQuery("#chartplace1").bind("plothover", function(event, pos, item) {
        jQuery("#x").text(pos.x.toFixed(2));
        jQuery("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                jQuery("#tooltip").remove();
                var x = 'Tháng ' + item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);

                showTooltip(item.pageX, item.pageY,
                    item.series.label + " : " + y);
            }

        } else {
            jQuery("#tooltip").remove();
            previousPoint = null;
        }

    });

    jQuery("#chartplace1").bind("plotclick", function(event, pos, item) {
        if (item) {
            jQuery("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });


    var plot = jQuery.plot(jQuery("#chartplace2"),
        [{data: flash2, label: "Đơn hàng", color: "#069"}], {
            series: {
                lines: {show: true, fill: true, fillColor: {colors: [{opacity: 0.05}, {opacity: 0.15}]}},
                points: {show: true}
            },
            legend: {position: 'nw'},
            grid: {hoverable: true, clickable: true, borderColor: '#ccc', borderWidth: 1, labelMargin: 10},
            xaxis: {mode: "time", timeformat: "%d/%m/%y"},
            yaxis: {min: 0}
        });

    var previousPoint = null;
    jQuery("#chartplace2").bind("plothover", function(event, pos, item) {
        jQuery("#x").text(pos.x.toFixed(2));
        jQuery("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                jQuery("#tooltip").remove();
                var x = 'Tháng ' + item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);

                showTooltip(item.pageX, item.pageY,
                    item.series.label + " : " + y);
            }

        } else {
            jQuery("#tooltip").remove();
            previousPoint = null;
        }
    });

    jQuery("#chartplace2").bind("plotclick", function(event, pos, item) {
        if (item) {
            jQuery("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });
    });
</script>
@stop
@section('content')
<h3 class="heading">BIỂU ĐỒ TĂNG TRƯỞNG</h3>
<div class="row-fluid">
    <div class="span12">
        <div style="padding-bottom:10px;">
            <span>
                <label style="font-weight: bold; font-size: 16px;color: red;text-decoration: underline; text-align: center">7 Ngày</label>
            </span>
        </div>
        <div id="chartplace" style="height:300px;"></div>
        <br clear="all" />
    </div>
</div>
<div class="row-fluid">
<span style="padding-bottom:10px;">
                <label style="font-weight: bold; font-size: 16px;color: red;text-decoration: underline; text-align: center">15 Ngày</label>
            </span>
    <div id="chartplace1" style="height:300px;"></div>

    <br clear="all" />
</div>
</div>
<div class="row-fluid">
    <div class="span12">
<span style="padding-bottom:10px;">
                <label style="font-weight: bold; font-size: 16px;color: red;text-decoration: underline; text-align: center">30 Ngày</label>
            </span>
        <div id="chartplace2" style="height:300px;"></div>
    </div>
</div>

@stop