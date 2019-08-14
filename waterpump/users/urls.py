from django.urls import path

from waterpump.users.views import (
    # user_list_view,
    # user_redirect_view,
    # user_update_view,
    # user_detail_view,
    UserList,
    UserProfile
)
from . import views

app_name = "users"
urlpatterns = [
    # path("", view=user_list_view, name="list"),
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    path("", view=UserList.as_view(), name="user_list"),
    path("<str:username>/", view=UserProfile.as_view(), name="user_profile"),
    path("<str:username>/fcmtoken", views.UserPostFcm.as_view(), name='fcmtoken')
]
