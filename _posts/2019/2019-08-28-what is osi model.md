---
title: school note | OSI model
description: Learning notes about OSI model.
category: 2019
tags: Networking
---

Just like a doctor tells his/her patient "There is something wrong with your XYZ.", computer needs a frame of reference for the doctor(or someone who fix the computer) to discuss the issues. Hence, we created a conceptual model called the Open Systems Interconnection(OSI) model.

### OSI model and protocols

OSI model defines how information is passed between hardware devices and user applications. It divides network communication into seven layers: Application layer, Presentation layer, Session layer, Transport layer, Network layer, Data link layer and Physical layer, each layer is associated with a packet of protocols(sets of rules, like a language).

![OSI model and protocols]({{site.baseurl}}/assets/images/archive/osi/osiAndProtocols.png)

### Layer7: Application layer

![application layer]({{site.baseurl}}/assets/images/archive/osi/layer7.png)

Application layer is the layer closet to the end user and is used by network application like Chrome, Outlook, etc. Some examples of protocols in this layer are:

- FTP for file transfer
- HTTP/HTTPS for web surfing
- SMTP for Email
- Telnet for virtual terminals

### Layer6: Presentation layer

![presentation layer]({{site.baseurl}}/assets/images/archive/osi/layer6.png)

Presentation layer translates, compresses, encrypt/decrypt the data.

### layer5: Session layer

![session layer]({{site.baseurl}}/assets/images/archive/osi/layer5.png)

Session layer manages each session(a temporary and interactive information interchange between two or more communicating devices), it is responsible for:

- Initiation: setting up a session.
- Termination: ending a session.
- Maintenance: sending or receiving data.
  - Authentication and Authorization when connecting to server.
  - Session management: keep track of data packets.

### layer4: Transport layer

![transport layer]({{site.baseurl}}/assets/images/archive/osi/layer4.png)

Transport layer controls the reliability of communication through:

- Segmentation: breaking data into smaller chunks called segment. A segment contains two things: 1. port number of source and destination for directing data to the correct application and 2. sequence number for sending data in the correct order.

- Flow control: decides the amount of data in transmission. In other words, telling the server to be faster/slower.

- Error control: resending missing data.

There are two protocols for two types of transmission:

- TCP:

  - exp: email.
  - connection-oriented.
  - slower communication.
  - re-transmitted packet if failed delivery.

- UDP:
  - exp: music.
  - connectionless.
  - faster communication.
  - doesn't resent missing packet.

### layer3: Network layer

![network layer]({{site.baseurl}}/assets/images/archive/osi/layer3.png)

Network layer performs:

- Addressing.
- Routing: finding a path through routers, uses IP address and Subnet mask.

### layer2: Data Link layer

![data link layer]({{site.baseurl}}/assets/images/archive/osi/layer2.png)

Data Link layer has two sublayers: Logical Link Control(LLC) sublayer and Media Access Control(MAC) sublayer. It allows data for accessing the media through framing, and controls how data is placed and received from the media through Media Access Control and Error Detection.

### layer1: Physical layer

![physical layer]({{site.baseurl}}/assets/images/archive/osi/layer1.png)

Physical layer controls the rules of data transmission, including signals, types of cables, and transmission speed.

### Other models

We uses OSI model to describe other models, for example:

![TCP/IP model]({{site.baseurl}}/assets/images/archive/osi/tcpipModel.png)

TCP/IP model, also known as DoD model. It has four layers, omitting the physical layer.

![Internet model]({{site.baseurl}}/assets/images/archive/osi/internetModel.png)

Internet model, collapses the top three OSI layers into one.
