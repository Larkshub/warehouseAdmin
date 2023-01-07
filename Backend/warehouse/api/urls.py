from django.urls import path
from .views import WarehouseView

urlpatterns = [
    path('warehouses/', WarehouseView.as_view(), name='warehouses_list'),
    path('warehouses/<int:id>', WarehouseView.as_view(), name='warehouses_mod')
]