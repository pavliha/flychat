<!DOCTYPE html>
@php $asset = json_decode(File::get(public_path("app-manifest.json")),true) @endphp

<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Fly Chat</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/css/tether.min.css"
          crossorigin="anonymous">
    <script src="/bower_components/jquery/dist/jquery.js"></script>
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css"/>
    <link href="{{ asset('styles/main.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
            'PUSHER_KEY' => "f07415a3f78444a23bc2"
        ]) !!};
    </script>
    <link rel="stylesheet" href="/{{$asset["index.css"]}}" type="text/css">
    @yield("css")
</head>
<body>
<div id="app" class="helper-grow">
    @yield('content')
</div>

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" crossorigin="anonymous"></script>
<script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="{{asset($asset["reactDOM.js"])}}"></script>
<script src="{{asset($asset["react.js"])}}"></script>
<script src="{{asset($asset["index.js"])}}"></script>
<!--suppress JSUnresolvedLibraryURL -->

<script>
    navigator.serviceWorker.register('sw.js');
</script>
@yield("js")
</body>
</html>
