from rest_framework import serializers

from apps.restaurants.models import Restaurant
from apps.reviews.models.models_reviews import Review


class RestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = "__all__"
