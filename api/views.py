from django.shortcuts import render,HttpResponse
import time
from django.http import JsonResponse
# Create your views here.
def index(request):
    return render(request,"api/index.html")

def post(request):
    start = int(request.GET.get("start") or 0)
    end = int(request.GET.get("end") or (start + 9))
    data = []
    for i in range(start,end+1):
        d=[]
        d.append(f"POST #{i}")
        d.append(f"This is POST number #{i}")
        data.append(d)
    
    time.sleep(1)

    return JsonResponse({
        "Posts": [d for d in data]
    })
