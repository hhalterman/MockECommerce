$("#zoom_01").elevateZoom({
    constrainType:"height",
    constrainSize:420,
    zoomType: "lens",
    containLensZoom: true,
    gallery:'gallery_01',
    cursor: 'pointer',
    galleryActiveClass: "active",
    imageCrossfade: true,
    }); 

    $("#zoom_01").bind("click", function(e) {  
	var ez =   $('#zoom_03').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
	return false;
	});
