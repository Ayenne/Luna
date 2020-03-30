from rest_framework import serializers
from apps.testing.models import TestModel

class TestingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestModel
        fields = '__all__'
