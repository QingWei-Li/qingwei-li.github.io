<template>
  <div class="wrap" @click="clicked = true">
    <div
      class="heart"
      @animationstart="save"
      @animationend="clicked = false"
      :class="{ animate: clicked, loved }">
    </div>
    <span class="heart-text">{{ total | num }}</span>
  </div>
</template>

<script>
import { api } from '../api';

export default {
  name: 'heart',

  data: () => ({
    clicked: false,
    loved: false,
    total: 0
  }),

  filters: {
    num(input) {
      return input < 1
        ? 'loading'
        : String(input).replace(/(.)(?=(.{3})+$)/g, n => n + ',');
    }
  },

  mounted() {
    if (!this.$isServer) {
      this.loved = !!localStorage.getItem('LOVED');
      this.get();
    }
  },

  methods: {
    get(added = 0) {
      api('/count').then(data => {
        this.total = Number(data) + added;
      });
    },

    save() {
      localStorage.setItem('LOVED', 1);
      this.loved = true;
      this.total++;
      api('/add', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          loved: this.loved
        })
      }).then(() => this.get());
    }
  }
};
</script>

<style scoped>
.wrap {
  text-align: center;
}

.heart {
  background-image: url(~@/assets/heart.png);
  background-position: left;
  background-repeat: no-repeat;
  background-size: 2900%;
  height: 50px;
  width: 50px;
  margin: auto;
}

.heart:hover {
  background-position: 3.57142857%;
}

.heart.animate {
  animation: fave-heart 1s steps(28);
  background-position: right;
}

.heart.loved {
  background-position: right;
}

@keyframes fave-heart {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: right;
  }
}
</style>
