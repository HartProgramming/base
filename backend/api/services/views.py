from .models import Benefits
from .serializers import BenefitsSerializer
from rest_framework import generics


class BenefitsViewSet(
    generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView
):
    queryset = Benefits.objects.all()
    serializer_class = BenefitsSerializer
