<template>
    <div class="">
        <Menubar></Menubar>
        <div class="flex flex-col justify-center items-center w-full h-screen border">
            <!-- login screen -->
            <div class="flex flex-col justify-center border w-[22vw] h-auto gap-10 px-8 py-12 border-gray-200 rounded-2xl shadow-md">
                <h1 class="font-serif text-4xl md:text-2xl text-stone-900 leading-tight font-black text-center">Enter new password</h1>
                <div class="flex flex-col justify-center gap-4">
                    <input type="text" class="border border-gray-400 py-2 px-4 rounded-md focus:outline-teal-600" placeholder="Password" spellcheck="false">
                    <input type="password" class="border border-gray-400 py-2 px-4 rounded-md focus:outline-teal-600" placeholder="RE-enter Password" spellcheck="false">
                    <button class="py-2 rounded-lg bg-teal-800 text-white shadow-sm hover:bg-teal-900">CONFIRM</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>