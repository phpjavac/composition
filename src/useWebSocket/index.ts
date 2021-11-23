import WsHeartBeat from '@findsoft/ws-heartbeat-ts';

const useWebSocket = () => {
  const ws = WsHeartBeat.getInstance({
    url: ''
  })
  console.log('this is useWs')
}

export default useWebSocket;