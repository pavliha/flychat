@extends('layouts.app')

@section('content')
<div class="helper-grow">
    <div class="row no-gutters" style="flex: 1;">
        <div class="col-md-3 col-lg-2 user-list-wrapper">
            <ul class="user-list">
                <li class="user-list__logged">
                    <div>{{Auth::user()->name}}</div>
                    <a class="btn btn-sm" href="/logout">Выйти</a>
                </li>
                <li class="user-list__header">Users online</li>
                <li>
                    <a href="#" class="user-list__user">{{Auth::user()->name}} <span class="badge">me</span></a>
                </li>
                <li class="user-list__item">
                    <a href="#" class="user-list__user">Petya Vasichkin</a>
                </li>
            </ul>
        </div>
        <div class="user-list-toggle" onClick="$('.user-list-wrapper').toggleClass('active');">USERS<br>ONLINE</div>
        <div class="col-md-9 col-lg-10">
            <div class="layout-right helper-grow">
                <div class="layout-messages">
                    <div style="max-width: 680px; margin: 0 auto;">
                        <div class="js-MsgList"></div>
                    </div>
                </div>
                <div class="js-AddMsg"></div>
            </div>
        </div>
    </div>
</div>
@endsection
