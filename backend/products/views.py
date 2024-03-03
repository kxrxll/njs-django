from rest_framework.response import Response
from rest_framework.views import APIView

from products.models import Product
from products.serializers import ProductSerializer, ProductCreateSerializer


class ProductView(APIView):
    def post(self, request, **kwargs):
        ser = ProductCreateSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
        return Response({'status': 'OK'})

    def get(self, request, **kwargs):
        products = Product.objects.all()
        ser = ProductSerializer(products, many=True)
        res = Response(ser.data)
        res["Access-Control-Allow-Origin"] = "*"
        res["Access-Control-Allow-Methods"] = "*"
        return res

    def delete(self, request, **kwargs):
        print(request.data)
        obj = Product.objects.filter(id=request.data)
        obj.delete()
        return Response({'status': 'OK'})
