@extends('layouts.app')

@section('content')
<<<<<<< HEAD
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    <div class="js-MsgList"></div>
                    <div class="js-AddMsg"></div>
=======
<div class="container-fluid">
    <div class="row no-gutters">
        <div class="col-md-2 user-list-wrapper">
            <ul class="user-list">
                <li class="user-list__header">Users online</li>
                <li class="user-list__item">
                    <a href="#" class="user-list__user">Petya Vasichkin</a>
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
                <div class="layout-sendform">
                    <input type="text" placeholder="Type message..." autofocus="true">
                    <button class="btn btn-secondary">Send</button>
>>>>>>> 083e4ab2b364e155a971dbfeb61655b68501edd0
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
@endsection
