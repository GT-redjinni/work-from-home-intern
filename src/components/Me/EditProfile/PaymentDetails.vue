<template>
    <div class="modal fade" id="paymentList" tabindex="-1" aria-labelledby="paymentListLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-white" style="background: #EB0E19;">
                    <h5 class="modal-title" id="paymentListLabel">Transactions</h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex">
                        <img src="../../../assets/user-image.jpg" class="border rounded-circle" alt="" height="75px"
                            width="75px">
                        <div class="ms-3">
                            <span class="text-subheading font-400 grey-color mt-2">Available Balance</span>
                            <br>
                            <span class="text-heading font-600 grey-color mt-2">Rs. 1598.00</span>
                        </div>
                    </div>
                    <div>
                        <div v-for="transaction in transactions" :key="transaction.id"
                            class="d-flex border rounded-3 mt-3 mb-2 p-2">
                            <div>
                                <svg v-if="transaction.status === 'Received'" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" class="bi bi-arrow-down-circle-fill me-2" viewBox="0 0 16 16"
                                    style="top: auto;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green"
                                        class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                    </svg>
                                </svg>
                                <svg v-else-if="transaction.status === 'Paid'" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" class="bi bi-arrow-up-circle-fill me-2" viewBox="0 0 16 16"
                                    style="top: auto;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                        class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                    </svg>
                                </svg>
                                <img :src="transaction.img" class="border rounded-circle" alt="" height="50px"
                                    width="50px">
                            </div>
                            <div class="text-start mx-2">
                                <span class="fw-normal text-subheading">{{ transaction.name }}</span>
                                <br>
                                <span class="fw-light text-desc">{{ transaction.date }}</span>
                            </div>
                            <div class="ms-auto me-2">
                                <span class="fw-light text-desc">{{ transaction.status }}</span>
                                <br>
                                <span class="font-600 text-subheading">{{ transaction.amount }}</span>
                            </div>
                        </div>
                    </div>
                    <button class="confirm-btn w-100 b-0 text-center">WITHDRAW</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentDetails',
    data() {
        return {
            transactions: [
                { id: 1, img: require('../../../assets/user1.jpg'), name: 'Yara Khalil', date: '24 Oct, 10:44 AM', status: 'Received', amount: '₹563.00' },
                { id: 2, img: require('../../../assets/user2.jpg'), name: 'Emma Johnson', date: '25 Oct, 11:30 AM', status: 'Paid', amount: '₹789.00' },
                { id: 3, img: require('../../../assets/user3.jpg'), name: 'Liam Smith', date: '26 Oct, 12:45 PM', status: 'Received', amount: '₹654.00' },
                { id: 4, img: require('../../../assets/user4.jpg'), name: 'Olivia Davis', date: '27 Oct, 1:15 PM', status: 'Paid', amount: '₹987.00' },
                { id: 5, img: require('../../../assets/user5.jpg'), name: 'Noah Wilson', date: '28 Oct, 2:00 PM', status: 'Received', amount: '₹876.00' },
            ]
        }
    }
}
</script>

<style scoped></style>