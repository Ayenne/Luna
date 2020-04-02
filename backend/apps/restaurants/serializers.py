from rest_framework import serializers

from apps.restaurants.models import Restaurant
from apps.categories.serializers import CategorySerializer


class RestaurantSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Restaurant
        fields = "__all__"
