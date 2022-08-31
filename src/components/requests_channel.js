import consumer from './consumer'

const RequestsChannel = consumer.subscriptions.create("RequestsChannel",{
    connected(){

    },
    disconnected(){

    },
    received(data){

    },
})

export default RequestsChannel;