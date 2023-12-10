from rest_framework.response import Response
from rest_framework.views import APIView

from products.models import Product
from products.serializers import ProductSerializer, ProductCreateSerializer


class ProductView(APIView):
    def post(self, request, **kwargs):
        print(request.data)
        ser = ProductCreateSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
        return Response({'status': 'OK'})

    def get(self, request, **kwargs):
        sensors = Product.objects.all()
        ser = ProductSerializer(sensors, many=True)
        res = Response(ser.data)
        res["Access-Control-Allow-Origin"] = "*"
        res["Access-Control-Allow-Methods"] = "*"
        return res
