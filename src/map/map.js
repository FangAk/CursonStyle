export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      // 动态创造DOM，引入api
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'http://webapi.amap.com/maps?v=2.0&callback=initAMap&key=44238d58e5002649ce2eac09625afc71'
      script.onerror = reject
      document.body.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })


}

