<template>
    <md-card class="md-card-profile">
        <div class="md-card-avatar">
            <img class="img" :src="cardUserImage" />
        </div>

        <md-card-content>
            <h6 class="category text-gray">CEO / Co-Founder</h6>
            <h4 class="card-title">Alec Thompson</h4>
            <p class="card-description">
                Don't be scared of the truth because we need to restart the human
                foundation in truth And I love you like Kanye loves Kanye I love Rick
                Owens’ bed design but the back is...
            </p>
            <md-button class="md-round md-success">Follow</md-button>
        </md-card-content>
    </md-card>
</template>
<script>
export default {
    name: "user-card",
    props: {
        cardUserImage: {
            type: String,
            default: require("https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&tbnid=9SPhZ2nyEGps3M&vet=12ahUKEwil38WpnLr-AhVA5HMBHQt7BhAQMygBegUIARC4AQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=771&h=480&itg=1&q=image&ved=2ahUKEwil38WpnLr-AhVA5HMBHQt7BhAQMygBegUIARC4AQ"),
        },
    },
    data() {
        return {};
    },
};
</script>
<style></style>
  