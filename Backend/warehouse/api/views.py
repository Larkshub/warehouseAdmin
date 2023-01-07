from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Warehouse
import json

# Create your views here.


class WarehouseView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            warehouses = list(Warehouse.objects.filter(id=id).values())
            if len(warehouses) > 0:
                warehouse = warehouses[0]
                data = {'message': "Success", 'warehouse': warehouse}
            else:
                data = {'message': "Warehouse not found..."}
            return JsonResponse(data)
        else:
            warehouses = list(Warehouse.objects.values())
            if len(warehouses) > 0:
                data = {'message': "Success", 'warehouses': warehouses}
            else:
                data = {'message': "Warehouse not found..."}
            return JsonResponse(data)

    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Warehouse.objects.create(name=jd['name'])
        data = {'message': "Success"}
        return JsonResponse(data)

    def put(self, request, id):
        jd = json.loads(request.body)
        warehouses = list(Warehouse.objects.filter(id=id).values())
        if len(warehouses) > 0:
            warehouse = Warehouse.objects.get(id=id)
            warehouse.name = jd['name']
            warehouse.save()
            data = {'message': "Success"}
        else:
            data = {'message': "Warehouse not found..."}
        return JsonResponse(data)

    def delete(self, request, id):
        warehouses = list(Warehouse.objects.filter(id=id).values())
        if len(warehouses) > 0:
            Warehouse.objects.filter(id=id).delete()
            data = {'message': "Success"}
        else:
            data = {'message': "Warehouse not found..."}
        return JsonResponse(data)