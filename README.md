## HOW to run the app in K8's ?```

# Follow the steps 👇

1. Download Minikube & kubectl

2. ```minikube start```

3. ```kubectl apply -f deployment.yaml```

4. ```kubectl apply -f service.yaml```

> Now deployment and service are created, to expose it we need to give an additional command in minikube

5. ```minikube service backend```

> Now, you can access the application! 😃

