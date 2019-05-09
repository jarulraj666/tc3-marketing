var shapes = [
  'M18.2,178c42-64.9,28-64.9,39-103C75,13.3,81.2,10,117.9,1s41.3,45,77.3,83.8c37.9,40.7,108.4,9.4,164,18.2,88,14,201.3-12,256,25,57.7,39,74,108,44,168-37.9,75.8-173,52-268,64-119.9,15.1-228.6,35-323.3-16.6C-4.9,303.8-15.2,229.6,18.2,178Z',
  'M22.9,151.5C68.7,90,146.8,118.9,174.5,83,217,28,204,0,260,0s61.1,58.6,107,90c52.1,35.7,80,12.6,129,25,42.2,10.7,85-14,121,13,54.1,40.6,75,106.9,54,167-27,77.3-204.4,25.4-291.3,47.4-112.1,28.4-221.2,51.6-316,0C-9.1,302.8-14.8,202.2,22.9,151.5Z',
  'M14.2,182c15-47,81.7-71.9,148-67,123,9,200,3.1,197-33-5-59,10.3-73,46.1-80s71.9,16,71.9,51c0,16.4,8,37,30,47s20.6,2.1,76,9c40,5,55.2,12.4,72,59,14.7,41,30,72,0,132-37.9,75.8-173,52-268,64-119.9,15.1-228.6,35-323.3-16.6C-8.9,307.8-8.8,254.1,14.2,182Z',
  'M34.2,154c29-42,209-51.1,275-45,108.2,10,178,20,190-21,17.6-60.2,18.1-80,68.1-87s53.9,28.2,53.9,63.2c0,16.4-7,25.8,0,50.8s23.6,19.8,34,67c11,50,23,58-7,118-37.9,75.8-173,52-268,64-119.9,15.1-228.6,35-323.3-16.6C-15.9,307.8-12.8,222.1,34.2,154Z'
]

var offset = [
  '30px',
  '25px',
  '5px',
  '-5px',
]

jQuery(document).ready(function() {
  var path = d3.select("#tab-background-svg");

  jQuery('.tab .tab-item-header').on('click', function() {
    var tab = jQuery(this).parents('.tab');
    var prevTab = tab.find('.active')
    prevTab.removeClass('active');

    var prevIndex = jQuery(prevTab).data('tab-index')
    var nextIndex = jQuery(this).data('tab-index');

    tab.find('.tab-item-headers .tab-item-header:nth-child(' + nextIndex + ')').addClass('active');
    var nextContainer = tab.find('.tab-item-containers .tab-item-container:nth-child(' + nextIndex + ')')
    nextContainer.addClass('active');
    var interpolator = flubber.interpolate(shapes[prevIndex - 1], shapes[nextIndex - 1], { maxSegmentLength: 5 });
    anime({
      targets: '#tab-background',
      left: [offset[prevIndex - 1], offset[nextIndex - 1]],
      duration: 1500,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '#tab-item-container-' + nextIndex,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
    });
    path
      .transition()
      .duration(1500)
      .attrTween("d", function() { return interpolator; })
  });
});
