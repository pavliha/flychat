@extends("layouts.app")

@section("content")
    <div class="text-center">
        <img src="/images/splash.svg" alt="" width="50" height="50" class="img-fluid splash">
        <h2>Добро пожаловать!</h2>
        <div>Чтобы начать общаться необходимо
            <a class="auth-link" href="/login">Войти</a> или
            <a class="auth-link" href="/register">Зарегистрироваться</a>
        </div>
    </div>
@endsection
