@extends("layouts.app")

@section("content")
    <div class="text-center landing">
      <div class="landing-box">
        <img src="/images/splash.svg" alt="Fly Chat">
        <h2>Добро пожаловать!</h2>
        <div>Чтобы начать общаться необходимо
            <a class="auth-link" href="/login">Войти</a> или
            <a class="auth-link" href="/register">Зарегистрироваться</a>
        </div>
      </div>
    </div>
@endsection
