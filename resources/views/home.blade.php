@extends('layouts.app')

@section('content')
    <div>
        <div class="row no-gutters">
            <div class="col-md-2 user-list-wrapper">
                <ul class="user-list">
                    <li class="user-list__logged">
                        @if(!Auth::guest())
                            <div>{{Auth::user()->name}}</div>
                        @endif
                        <a class="btn btn-sm" href="/logout">Выйти</a>
                    </li>
                    <li class="user-list__header">Users online</li>
                    <li class="user-list__item">
                        <a href="#" class="user-list__user">{{Auth::user()->name}} <span class="badge">me</span></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-10">
                <div class="layout-right">
                    <div class="layout-messages">
                        <div style="max-width: 680px; margin: 0 auto;">
                            <div class="js-MsgList"></div>
                        </div>
                    </div>
                    <div class="js-AddMsg">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
