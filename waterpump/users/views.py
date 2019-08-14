from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.http import HttpResponse
from rest_framework.response import Response
from . import models, serializers
from rest_framework.views import APIView
from django.views.generic import DetailView, ListView, RedirectView, UpdateView


# User = get_user_model()


# class UserDetailView(LoginRequiredMixin, DetailView):

#     model = User
#     slug_field = "username"
#     slug_url_kwarg = "username"


# user_detail_view = UserDetailView.as_view()


# class UserListView(LoginRequiredMixin, ListView):

#     model = User
#     slug_field = "username"
#     slug_url_kwarg = "username"


# user_list_view = UserListView.as_view()


# class UserUpdateView(LoginRequiredMixin, UpdateView):

#     model = User
#     fields = ["name"]

#     def get_success_url(self):
#         return reverse("users:detail", kwargs={"username": self.request.user.username})

#     def get_object(self):
#         return User.objects.get(username=self.request.user.username)


# user_update_view = UserUpdateView.as_view()


# class UserRedirectView(LoginRequiredMixin, RedirectView):

#     permanent = False

#     def get_redirect_url(self):
#         return reverse("users:detail", kwargs={"username": self.request.user.username})


# user_redirect_view = UserRedirectView.as_view()

class UserPostFcm(APIView):

    def post(self, request, username, format=None):

        user = request.user

        try:
            user_fcmToken = models.User.objects.get(username=username)
        except models.UserDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        print(request.data)
    # if request.method == 'POST':
    #     try:
    #         user = models.User.objects.get(username=username)
    #         fcmToken = request.POST
    #         data = fcmToken
    #         print(data)
    #     except models.User.DoesNotExist:
    #         return Response(status=status.HTTP_404_NOT_FOUND)
    
    # return HttpResponse(data)

class UserList(APIView):

    def get(self, request, format=None):

        
        all_user = models.User.objects.all()
        serializer = serializers.UserProfileSerializer(all_user, many=True)

        return Response(data=serializer.data) 
        
class UserProfile(APIView):

    def get_user(self, username):

        try:
            found_user = models.User.objects.get(username=username)
            return found_user
        except models.User.DoesNotExist:
            return None
    
    def get(self, request, username, format=None):

        found_user = self.get_user(username)

        if found_user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
            
        # try:
        #     found_user = models.User.objects.get(username=username)
        # except models.User.DoesNotExist:
        #     return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data=serializer.data)

    def put(self, request, username, format=None):
        
        user = request.user
        
        found_user = self.get_user(username)

        if found_user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        elif found_user.username != user.username:

            return Response(status=status.HTTP_401_UNATHORIZED)

        else:

            serializer = serializers.UserProfileSerializer(found_user, data=request.data, partial=True)

            if serializer.is_valid():

                serializer.save()

                return Response(data=serializer.data)

            else: 

                return Response(data=serializer.errors)