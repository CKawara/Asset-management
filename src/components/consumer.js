import { createConsumer } from "@rails/actioncable";


export default createConsumer("ws://127.0.0.1:3000/cable")