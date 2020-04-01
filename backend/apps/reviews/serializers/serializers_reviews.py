from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from apps.reviews.models.models_reviews import Review
from apps.users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    idUser = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = "__all__"