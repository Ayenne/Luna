from rest_framework.generics import ListCreateAPIView

from apps.testing.models import TestModel
from apps.testing.serializers import TestingSerializer


class ListCreateTestingView(ListCreateAPIView):
    queryset = TestModel.objects.all()
    serializer_class = TestingSerializer
