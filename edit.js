<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
     <div class=" p-10 main w-full min-h-screen bg-zinc-900 text-white">
        <a href="/" class="text-blue-500 inline-block mb-10">Back To Home</a>
         <form action="/edit" method="post">
          <input
            class="block bg-zinc-800 text-zinc-600 px-5 py-2 w-1/4 rounded-lg  "
            type="text"
            placeholder="Previous Name"
            name="previous"
            value="<%= filename %>"
            disabled="true"
          />
          <input
            class="block bg-zinc-800 px-5 py-2 w-1/4 rounded-lg mt-2 "
            type="text"
            placeholder="New Name"
            name="new"
          />

          <input
            class="block  mt-2 bg-yellow-600 px-5 py-2 rounded-lg"
            type="submit"
            value="Update Name"
          />
        </form>
        
     </div>
</body>
</html> 
