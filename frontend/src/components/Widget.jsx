import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const isScriptAppended = useRef(false);

  useEffect(() => {
    if (isScriptAppended.current) return;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    
    // Make the widget responsive based on container width
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "symbol": "BITSTAMP:BTCUSD",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "range": "1M",
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    
    container.current.appendChild(script);
    isScriptAppended.current = true;
  }, []);

  return (
    <div className="w-full">
      <div 
        className="tradingview-widget-container relative aspect-[16/10] min-h-[300px] max-h-[610px]" 
        ref={container}
      >
        <div className="tradingview-widget-container__widget absolute inset-0"></div>
       
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);