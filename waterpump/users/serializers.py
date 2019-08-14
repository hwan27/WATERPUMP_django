from rest_framework import serializers
from . import models

class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'username',
            'fcmToken',
            'jwtToken',
            'managing'
        )
