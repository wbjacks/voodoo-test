from diagrams.generic.device import Mobile
from diagrams.generic.os import IOS
from diagrams.onprem.compute import Server
from diagrams import Cluster, Diagram, Edge

with Diagram("Purchasing Flow"):
    with Cluster('Player'):
        payment = Mobile("Payment") 
        fulfillment = Mobile("Fulfillment")
    with Cluster('Services'):
        iap = IOS("IAP Backend")
        backend = Server("Game Backend")

    payment >> Edge(label = 'do purchase') >> iap
    fulfillment << Edge(label = 'receipt, product ID') << iap
    fulfillment >> Edge(label = 'receipt') >> backend
    backend >> Edge(label = 'is receipt good?') >> iap >> backend
    backend >> Edge(label = 'updated player') >> fulfillment

