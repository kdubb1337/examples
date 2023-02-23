# Homepage Kubernetes Setup

🧠 See the corresponding article for more details about using [Homepage](https://www.erichreich.com/your-new-homepage/)

## Pre-Requisites

- Change `pv0.yaml` to point to a usable storage in your cluster.

- Change the host in `ingress.yaml` to your liking.

- It is setup to create basic auth for you with username `foo` and password `password`

To change the username and password follow [these instructions](https://kubernetes.github.io/ingress-nginx/examples/auth/basic/) or if you don't want basic auth, just comment it out in `ansible/install.yaml`

## Getting Started

To deploy Homepage:

```bash
ansible-playbook kubernetes/homepage/ansible/install.yaml
```

To upgrade:

```bash
ansible-playbook kubernetes/homepage/ansible/upgrade.yaml
```

To uninstall run:

```bash
ansible-playbook kubernetes/homepage/ansible/uninstall.yaml
```

To uninstall everything, including the data, run:

```bash
ansible-playbook kubernetes/homepage/ansible/dangerous-uninstall.yaml
```
