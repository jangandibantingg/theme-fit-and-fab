var tpj=jQuery;			
					var revapi14;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_14_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_14_1");
						}else{
							revapi14 = tpj("#rev_slider_14_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"assets/",
								sliderLayout:"boxed",
								dottedOverlay:"none",
								delay:6000,
								navigation: {
									keyboardNavigation:"off",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"on",
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 50,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
								},
								responsiveLevels:[1240,1024,778,480],
								gridwidth:[1240,1024,778,480],
								gridheight:[1097,1097,800,700],
								lazyType:"none",
								shadow:0,
								spinner:"off",
								stopLoop:"off",
								stopAfterLoops:0,
								stopAtSlide:.0,
								shuffle:"off",
								autoHeight:"off",
								fullScreenAlignForce:"off",
								fullScreenOffsetContainer: "",
								fullScreenOffset: "",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
						}
					});	/*ready*/







