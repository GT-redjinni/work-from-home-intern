<template>
    <div class="modal fade" id="ShareModal" tabindex="-1" aria-labelledby="ShareModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header text-white" style="background: #EB0E19;">
                    <h5 class="modal-title" id="ShareModalLabel">
                        Share
                    </h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-center p-2 text-heading grey-color font-600">Share This Post on : </p>
                    <div class="share-buttons mt-3 p-1">
                        <button class="share-button linkedin">
                            <img src="../../assets/linkedin-icon.png" class="share-icon" alt="LinkedIn" />
                            <p class="text-desc grey-color font-500 m-1">LinkedIn</p>
                        </button>
                        <button class="share-button facebook">
                            <img src="../../assets/facebook-icon.png" class="share-icon" alt="Facebook" />
                            <p class="text-desc grey-color font-500 m-1">Facebook</p>
                        </button>
                        <button class="share-button instagram">
                            <img src="../../assets/instagram-icon.png" class="share-icon" alt="Instagram" />
                            <p class="text-desc grey-color font-500 m-1">Instagram</p>
                        </button>
                        <button class="share-button whatsapp">
                            <img src="../../assets/whatsapp-icon.png" class="share-icon" alt="WhatsApp" />
                            <p class="text-desc grey-color font-500 m-1">WhatsApp</p>
                        </button>
                        <button class="share-button youtube">
                            <img src="../../assets/youtube-icon.png" class="share-icon" alt="YouTube" />
                            <p class="text-desc grey-color font-500 m-1">YouTube</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShareModal'
}
</script>

<style scoped>
.share-buttons {
  display: flex;
  justify-content: space-around;
  /* Distribute buttons evenly */
}

.share-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.share-button:hover {
  transform: scale(1.1);
  /* Increase size on hover */
}

.share-icon {
  height: 35px;
  width: 35px;
}
</style>