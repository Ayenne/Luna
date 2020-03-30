from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class FullUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'phone', 'about_me',
                  'things_i_love', 'date_joined', 'avatar']

