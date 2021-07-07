<template>
    <div class="category">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <h1>分类</h1>
            </template>
        </nav-bar>
        <div class="wrapper" ref="wrapper">

            <ul class="content">
                <li>滚动1</li>
                <li>滚动2</li>
                <li>滚动3</li>
                <li>滚动4</li>
                <li>滚动5</li>
                <li>滚动6</li>
                <li>滚动7</li>
                <li>滚动8</li>
                <li>滚动9</li>
                <li>滚动10</li>
                <li>滚动11</li>
                <li>滚动12</li>
                <li>滚动13</li>
                <li>滚动14</li>
                <li>滚动15</li>
                <li>滚动16</li>
                <li>滚动17</li>
                <li>滚动18</li>
                <li>滚动19</li>
                <li>滚动20</li>
                <li>滚动21</li>
                <li>滚动22</li>
                <li>滚动23</li>
                <li>滚动24</li>
                <li>滚动25</li>
                <li>滚动26</li>
                <li>滚动27</li>
                <li>滚动28</li>
                <li>滚动29</li>
                <li>滚动30</li>
                <li>滚动31</li>
                <li>滚动32</li>
                <li>滚动33</li>
                <li>滚动34</li>
                <li>滚动35</li>
                <li>滚动36</li>
                <li>滚动37</li>
                <li>滚动38</li>
                <li>滚动39</li>
                <li>滚动40</li>
                <li>滚动41</li>
                <li>滚动42</li>
                <li>滚动43</li>
                <li>滚动44</li>
                <li>滚动45</li>
                <li>滚动46</li>
                <li>滚动47</li>
                <li>滚动48</li>
                <li>滚动49</li>
                <li>滚动50</li>
            </ul>

        </div>

    </div>

</template>

<script>
    // @ is an alias to /src
    import NavBar from 'components/content/navbar/NavBar.vue'

    import BScroll from '@better-scroll/core'

    import Pullup from '@better-scroll/pull-up'
    // 监听上拉加载更多
    BScroll.use(Pullup)

    export default {
        name: 'Home',
        components: {
            NavBar
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    //   侦测滚动位置
                    probeType: 3,
                    pullUpLoad: true
                })
                this.scroll.on('scroll', (position) => {
                    // console.log(position)
                })

                this.scroll.on('pullingUp', () => {
                    console.log("上拉加载更多")
                })

            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-high-text);
        /* 固定顶部导航 */
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;

    }

    .home-nav h1 {
        text-align: center;
        margin: 0;
        font-size: 24px;
        color: var(--color-background);
    }

    .wrapper {
        height: 200px;
        background-color: #bfa;
        overflow: hidden;
    }
</style>