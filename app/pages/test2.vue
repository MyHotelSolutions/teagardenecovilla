<template>
    <div class="">
        <p class="font-black">current time</p>
        <p>{{ new Date(data.location.localtime)  }}</p>
        <h3 class="font-black">Today</h3>
        <p>location : {{ data.location.name }}</p>
        <p>country : {{ data.location.country }}</p>
        <p>last update : {{ data.current.last_updated }}</p>
        <p>last update : {{ data.current.condition.icon }}</p>
        <img :src="data.current.condition.icon" alt="">
        <div class="flex flex-row gap-2 items-center">
            <Icon name="carbon:temperature-celsius"></Icon>
            <p>temperate : {{ data.current.temp_c }}</p>
            <p class="text-xs font-black">data.current.temp_c</p>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <Icon name="hugeicons:fast-wind"></Icon>
            <p>wind : {{ data.current.wind_kph }} kph</p>
            <p class="text-xs font-black">data.current.wind_kph</p>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <Icon name="lets-icons:humidity"></Icon>
            <p>humidity : {{ data.current.humidity }}</p>
            <p class="text-xs font-black">data.current.humidity</p>
            <p></p>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <Icon name=""></Icon>
            <p></p>
        </div>
        <h3 class="font-black">three day forcast</h3>
        <div class="flex flex-col gap-4">
            <div class="border" v-for="item in forcast.forecast.forecastday">
                <p>{{ item.date }}</p>
                <p>day max temperetur {{ item.day.maxtemp_c }}</p>
                <p>day min temperetur {{ item.day.mintemp_c }}</p>
                <p>day min wind speed {{ item.day.maxwind_kph }}</p>
                <p>daily chance of rain {{ item.day.daily_chance_of_rain }}</p>
                <!-- <p>condition {{ item.day.condition.icon }}</p> -->
                <img :src="item.day.condition.icon" alt="">
                <p>daily chance of rain {{ item.astro.sunrise }}</p>
                <p>daily chance of rain {{ item.astro.sunset }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const runtimeconfig =  useRuntimeConfig()


const { data, error} = await useFetch('http://api.weatherapi.com/v1/current.json', {
    query : {
        key : runtimeconfig.public.wetherapi,
        q : 'morawaka',
        
    }
})

const { data:forcast, error:forcast_error } = await useFetch(`http://api.weatherapi.com/v1/forecast.json`, {
        query : {
            key : runtimeconfig.public.wetherapi,
            q : 'morawaka',
            days : 3,
            aqi : 'no',
            alerts : 'no'
    }
})

</script>