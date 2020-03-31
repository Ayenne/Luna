from rest_framework.generics import ListCreateAPIView, ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.admin.views.decorators import staff_member_required
from rest_framework.response import Response
from rest_framework import status


from apps.restaurants.models import Restaurant
from apps.restaurants.serializers import RestaurantSerializer


class ListCreateRestaurantsView(ListCreateAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(name__icontains=self.request.query_params.get('search', ''))


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'


class RetrieveRestaurantByCategoryView(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(category__id=self.kwargs.get('category_id'))

