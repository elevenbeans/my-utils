
(function(window){
	let	_pullLengh = 0;
	let	_startLength = 0;
	let _ptrEle = '';
	let _element = '';
	let pullToRefresh = {
		init: function(cfg){
			_element = document.querySelector(cfg.targetElement || 'body');
			_ptrEle = document.querySelector(cfg.ptrElement);
			_ptrEle.innerText = cfg.instructionsPullToRefresh;
			document.addEventListener('touchstart', function(event){
				_startLength = event.touches[0].pageY;
				_element.removeAttribute('style');
				// pull to refresh
				_ptrEle.innerText = cfg.instructionsPullToRefresh;
			});
			document.addEventListener('touchmove', function(event){
				if(document.body.scrollTop === 0){
					_pullLengh = event.touches[0].pageY - _startLength;
					// pull to refresh
					pullElement(_element, _pullLengh, cfg);
				}
				if(document.body.scrollTop > 0){
					// window.scrollTo(0, 0);
					_element.style['transform'] = 'translate(0, 0px)';
				}
			});
			document.addEventListener('touchend', function(event){
				if(document.body.scrollTop === 0){
					if(_pullLengh > 60 ){
						// refreshing
						_ptrEle.innerText = cfg.instructionsRefreshing;
						cfg.onPull();
						_element.style['transition'] = 'transform 0.4s ease';
						_element.style['transform'] = 'translate(0, 0px)';
					} else if(_pullLengh < 60){
						_element.style['transition'] = 'transform 0.4s ease';
						_element.style['transform'] = 'translate(0, 0px)';
					}
				}
			});
		}
	}
	let pullElement = function(element, length, cfg){
		if(length < 100){
			element.style['transform'] = 'translate(0, ' + length + 'px)';
			if(length > 60){
				// release to fresh
				_ptrEle.innerText = cfg.instructionsReleaseToRefresh;
			}
		}
	};
	// let setPullInstractions = function(ptrEle, text){
	// 	ptrEle.innerText = text;
	// };
	window.pullToRefresh = pullToRefresh;
})(window);
